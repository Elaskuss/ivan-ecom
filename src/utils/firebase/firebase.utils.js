import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QuerySnapshot } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDJgDmALPgxUrv7zgmevCpJy52dHoqEtRI",
   authDomain: "ivan-ecom-db.firebaseapp.com",
   projectId: "ivan-ecom-db",
   storageBucket: "ivan-ecom-db.appspot.com",
   messagingSenderId: "95327004204",
   appId: "1:95327004204:web:67fde5863ae71b55859389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = collection(db, collectionKey); 
   const batch = writeBatch(db);

   objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
   });

   await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db, "categories");
   const q = query(collectionRef);

   const quarySnapshot = await getDocs(q);
   const categoryMap = quarySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
   }, {});
   return categoryMap;
}

export const createUserDocFromAuth = async (
   userAuth,
   addtionalInformation = {}
) => {
   const userDocRef = doc(db, "users", userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...addtionalInformation,
         });
      } catch (error) {
         console.log(error);
      }
   }

   return userDocRef;
};

export const createAuthUser = async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
   if(callback == null) return;
   onAuthStateChanged(auth, callback);
}