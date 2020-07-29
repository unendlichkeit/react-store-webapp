import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDRWnREZiYiwYeKgiwsh1ZEPm8WmPMmbhE",
    authDomain: "react-store-app-6e09b.firebaseapp.com",
    databaseURL: "https://react-store-app-6e09b.firebaseio.com",
    projectId: "react-store-app-6e09b",
    storageBucket: "react-store-app-6e09b.appspot.com",
    messagingSenderId: "547624460252",
    appId: "1:547624460252:web:d8a8567259c0d844f13919",
    measurementId: "G-3NFEM4ELNS"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;