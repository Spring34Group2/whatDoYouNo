import firebase from "firebase/app";
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrZjPOFZmBIdYeiX1m0b4FXvh-ccs7agU",
    authDomain: "what-do-you-no-1d01a.firebaseapp.com",
    projectId: "what-do-you-no-1d01a",
    storageBucket: "what-do-you-no-1d01a.appspot.com",
    messagingSenderId: "569747745173",
    appId: "1:569747745173:web:868aa30cc81f6c54d56e9c"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

export default firebase;