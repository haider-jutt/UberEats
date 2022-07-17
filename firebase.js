// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBD7VLEGI0kp-776xq63E8J5moKPg-Sufs",
  authDomain: "uber-eats-clone-45896.firebaseapp.com",
  projectId: "uber-eats-clone-45896",
  storageBucket: "uber-eats-clone-45896.appspot.com",
  messagingSenderId: "460810415234",
  appId: "1:460810415234:web:11d8a288acc5f5688d189b"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  
}