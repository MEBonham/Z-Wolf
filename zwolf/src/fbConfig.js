import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUzilhYM93CF2TVZorGGonopCYIhj7KTs",
    authDomain: "z-wolf-rpg.firebaseapp.com",
    projectId: "z-wolf-rpg",
    storageBucket: "z-wolf-rpg.appspot.com",
    messagingSenderId: "402869744216",
    appId: "1:402869744216:web:2ee87b59b17615e6ded02d"
};

// Export an instance of a firebase object, so that auth() and firestore() don't have to run every time components load
class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        // this.storage = firebase.storage;
    }
}

export default new Firebase();