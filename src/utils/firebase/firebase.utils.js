import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoZX4nsiSmYNFSWP-TL1NU6jICSBNERec",
  authDomain: "crwn-cloth-db-537b4.firebaseapp.com",
  projectId: "crwn-cloth-db-537b4",
  storageBucket: "crwn-cloth-db-537b4.appspot.com",
  messagingSenderId: "654988791097",
  appId: "1:654988791097:web:78a136d96fb70e8c1a2ce8",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
