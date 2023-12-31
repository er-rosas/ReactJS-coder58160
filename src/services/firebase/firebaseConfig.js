// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyApfRahaMlHOuxA6aXkMLpj2X4vRf784oc",
    authDomain: "reactjs-coder58160.firebaseapp.com",
    projectId: "reactjs-coder58160",
    storageBucket: "reactjs-coder58160.appspot.com",
    messagingSenderId: "37926662434",
    appId: "1:37926662434:web:b77a8dc56af6d55dfff57b"
}; */

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)