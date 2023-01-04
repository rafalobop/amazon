import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyC0GEnUkwUEu9T5egmtexR_C0W5yanTg8E",
    authDomain: "amzn-7c3ee.firebaseapp.com",
    projectId: "amzn-7c3ee",
    storageBucket: "amzn-7c3ee.appspot.com",
    messagingSenderId: "508508817076",
    appId: "1:508508817076:web:bcec61218dd144031bb9e1"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()

export default db