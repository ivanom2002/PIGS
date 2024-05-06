import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, query, where, getDocs } from 'firebase/firestore/lite';


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