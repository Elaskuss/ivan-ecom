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
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDJgDmALPgxUrv7zgmevCpJy52dHoqEtRI",
   authDomain: "ivan-ecom-db.firebaseapp.com",
   projectId: "ivan-ecom-db",
   storageBucket: "ivan-ecom-db.appspot.com",
   messagingSenderId: "95327004204",
   appId: "1:95327004204:web:67fde5863ae71b55859389",
};

// Initialize Firebase
initializeApp(firebaseConfig);

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

export const addDocument = async (collectionKey, docKey, data) => {
   const userDocRef = doc(db, collectionKey, docKey);
   setDoc(userDocRef, data);
}


export const getCategoriesAndDocuments = async () => {
   const collectionRef = collection(db, "categories");
   const q = query(collectionRef);

   const quarySnapshot = await getDocs(q);
   const categoriesArray = quarySnapshot.docs.map(docSnapshot => docSnapshot.data());
   return categoriesArray;
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
            uid: userAuth.uid,
            createdAt,
            ...addtionalInformation,
         });
      } catch (error) {
         console.log(error);
      }
   }

   return userSnapshot.data();
};

export const getUserDocFromAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);
   return userSnapshot.data();
}

export const createAuthUser = async (email, password) => {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password).catch((error) =>{
      switch(error.code){
         case "auth/user-not-found":
            return "The user was not found";
         case "auth/wrong-password":
            return "The email and password does not match";
      }
   });
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
   if(callback == null) return;
   return onAuthStateChanged(auth, callback);
}