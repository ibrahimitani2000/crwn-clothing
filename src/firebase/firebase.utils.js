import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { initialize } from "workbox-google-analytics";
const config = {
  apiKey: "AIzaSyBC4uI6v9LOLCimg5GywAVHIn2kqzxCgbw",
  authDomain: "crwn-db-f834b.firebaseapp.com",
  projectId: "crwn-db-f834b",
  storageBucket: "crwn-db-f834b.appspot.com",
  messagingSenderId: "725571614452",
  appId: "1:725571614452:web:f1c6de327955c4660250a1",
  measurementId: "G-QKKHGME3H4",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDateAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDateAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
