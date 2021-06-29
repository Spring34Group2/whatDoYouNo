import firebase from "firebase/app";
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4kuJ2rL3TJzsHaSKvFxzuSypBW-jhlgU",
  authDomain: "what-do-you-no-73ea0.firebaseapp.com",
  projectId: "what-do-you-no-73ea0",
  storageBucket: "what-do-you-no-73ea0.appspot.com",
  messagingSenderId: "520731347776",
  appId: "1:520731347776:web:b03e23e8a5e688136a88a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;