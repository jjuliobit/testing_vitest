import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvF17Y5ApfuVBSm_bemsZYoPrNVUT1r2s",
  authDomain: "music-temp-2a2ab.firebaseapp.com",
  projectId: "music-temp-2a2ab",
  storageBucket: "music-temp-2a2ab.appspot.com",
  appId: "1:513389509498:web:f976453109bb87de1034c3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
