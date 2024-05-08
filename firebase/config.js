import { initializeApp }  from 'firebase/app'
import {getFirestore, setDoc, doc, collection, query, where, getDocs, getDoc} from 'firebase/firestore/lite';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMwo4Zutrf85ldAqpb9BA07tcK7xsCPog",
    authDomain: "pigs-6b564.firebaseapp.com",
    databaseURL: "https://pigs-6b564-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pigs-6b564",
    storageBucket: "pigs-6b564.appspot.com",
    messagingSenderId: "751466244708",
    appId: "1:751466244708:web:3dba83d5b4363360b34d71",
    measurementId: "G-LW1D3P6YFK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


async function getEldersForCaregiver(db,caregiverId) {
    const q = query(collection(db,'users'),where('caregiver','==','/users/' + caregiverId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })
}

export async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    return user
}

export async function register(...data) {
    const userCredential = await createUserWithEmailAndPassword(auth, data[0].email, data[0].password)

    const uuid = userCredential.user.uid

    if (uuid.length > 0) {
        const userData = {
            caregiver: data[0].caregiver,
            email: data[0].email,
            mainLanguage: data[0].mainLanguage,
            name: data[0].name,
            role: data[0].role,
            surname: data[0].surname,
            telephoneNumber: data[0].telephoneNumber
        }
        const docRef = await doc(db, 'users', uuid)

        await setDoc(docRef, userData)

        return uuid
    }
}

export async function getUser(uuid) {
    const docRef = doc(db, 'users', uuid)

    try {
        const snap = await getDoc(docRef)

        if(snap.exists()) {
            // Obtener las colecciones internas del usuario
            const subcollections = ['medicine']; // Nombres de las subcolecciones
            const coleccionesPromises = subcollections.map(async (subcollection) => {
                const querySnapshot = await getDocs(collection(docRef, subcollection));
                const documentos = querySnapshot.docs.map((doc) => doc.data());
                return { [subcollection]: documentos };
            });

            const colecciones = await Promise.all(coleccionesPromises);

            // Combinar los datos del usuario y sus colecciones internas
            const datosCompletos = { ...snap.data(), ...colecciones };

            return datosCompletos
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}

export async function getUsersByRole(role){

    const q = query(collection(db,'users'),where('role','==',role))
    const querySnapshot = await getDocs(q)
    let users = 3
    querySnapshot.forEach((doc) => {
        users = [doc.id,doc.data()]
    })

    return users

}

export async function getUserIDFromTelephone(telephone){
    const q = query(collection(db,'users'),where('telephoneNumber','==',telephone))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        return doc.id
    })
    return null
}

async function getDocInfo(id){
    const docRef = doc(db,'users',id)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
        return [docSnap.id,docSnap.data()]
    }else{
        return null
    }
}
export async function isCaregiver(uuidCaregiver) {
    const docInfo = await getDocInfo(uuidCaregiver)
    return docInfo[1].role === "caregiver";
}

export async function connectUsers(telephoneCaregiver,uuidElder) {
    const uuidCaregiver = await getUserIDFromTelephone(telephoneCaregiver)

    if(!await isCaregiver(uuidCaregiver)) return 'No es un cuidador'
    if(await isCaregiver(uuidElder)) return 'Es un cuidador en vez de un anciano'

    const docRefCaregiver = doc(db, 'users', uuidCaregiver)
    const docRefElder = doc(db, 'users', uuidElder)

    //Se lee y modifica "elders" y después añade "elders" al doc
    const docSnap = await getDoc(docRefCaregiver)
    if(docSnap.exists()){

        let elders = docSnap.data().elders
        elders.push(docRefElder)
        await setDoc(docRefCaregiver, {elders:elders},{merge: true})
    }
    await setDoc(docRefElder,{caregiver:'/users/' + uuidElder},{merge: true})
    return true
}