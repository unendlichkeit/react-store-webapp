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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        // console.log(userRef);
        // console.log(snapShot);

        if(!snapShot.exists) {
            const { displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('Error creating user ', error.message);
            }
        }

        return userRef;
    }
    
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;