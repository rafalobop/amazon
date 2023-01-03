import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVCgpgkGDCb7J1oSgjVT5gW-oAHmsMwb8",
    authDomain: "fir-b0815.firebaseapp.com",
    projectId: "fir-b0815",
    storageBucket: "fir-b0815.appspot.com",
    messagingSenderId: "918138234573",
    appId: "1:918138234573:web:5ab2a6ac27f7107f4fab84"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

