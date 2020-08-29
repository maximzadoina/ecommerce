import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBnHVOPYwQ4fVmo7905M9Lzk9sfNfDSGc",
  authDomain: "ecommerce-9ec9e.firebaseapp.com",
  databaseURL: "https://ecommerce-9ec9e.firebaseio.com",
  projectId: "ecommerce-9ec9e",
  storageBucket: "ecommerce-9ec9e.appspot.com",
  messagingSenderId: "229924887249",
  appId: "1:229924887249:web:c752fa56d7dae0a57443f0",
  measurementId: "G-8WJ873CSPQ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      console.log(email + "a");
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformetCollection=collections.docs.map(doc=>{
    const{title,items}=doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })
  return transformetCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator
  },{})
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
