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

async function createElder(id, ...data){
    const usersRef = collection(db,"users")
    await setDoc(doc(usersRef,id), {
        caregiver: data.caregiverId,
        email: data.email,
        mainLanguage: data.language,
        name: data.name,
        role: "elder",
        surname: data.surname,
        telephoneNumber: data.telephoneNumber
    })
}

async function createCaregiver(id, ...data){
    const usersRef = collection(db,"users")
    await setDoc(doc(usersRef,id), {
        elders: data.elders,
        email: data.email,
        mainLanguage: data.language,
        name: data.name,
        role: "caregiver",
        surname: data.surname,
        telephoneNumber: data.telephoneNumber
    })
}

async function getElders(db,caregiverId) {
    const q = query(collection(db,'users'),where('caregiver','==','/users/' + caregiverId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })
}



async function getMedicine(elderId,id,...data){
    const usersRef = collection(db,"users")
    await getDoc()
}

async function getAllMedicine(elderId,...data){
    const querySnapshot = await getDocs(collection(db,"users",elderId,"medicine"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })
}

async function getAlert(elderId, id, ...data){

}

async function getAllAlerts(elderId, ...data){

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
