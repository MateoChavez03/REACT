// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTRUPLworeYbYFSgaZ_ZChotW86HW0I5c",
    authDomain: "gamr---react.firebaseapp.com",
    projectId: "gamr---react",
    storageBucket: "gamr---react.appspot.com",
    messagingSenderId: "217096894881",
    appId: "1:217096894881:web:15c2f0c513bdb670a3f3e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);