/* eslint-disable indent */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC69zBsmQF0M7y1Zl7dzKwy4rQwC7uyIec',
    authDomain: 'musicapp-18499.firebaseapp.com',
    projectId: 'musicapp-18499',
    storageBucket: 'musicapp-18499.appspot.com',
    appId: '1:638549057958:web:f4daaad404184d2f37ef67',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection('users');

export {
    auth,
    db,
    userCollection,
};
