import { initializeApp } from 'firebase/app';
import { getFirestore, collection,query,where, getDocs } from 'firebase/firestore/lite';


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

async function getElders(db,caregiverId) {
    const q = query(collection(db,'users'),where('caregiver','==','/users/' + caregiverId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    })
}

async function createDoc(id, data){

}
