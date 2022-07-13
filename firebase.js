import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBD7VLEGI0kp-776xq63E8J5moKPg-Sufs",
    authDomain: "uber-eats-clone-45896.firebaseapp.com",
    projectId: "uber-eats-clone-45896",
    storageBucket: "uber-eats-clone-45896.appspot.com",
    messagingSenderId: "460810415234",
    appId: "1:460810415234:web:11d8a288acc5f5688d189b"
  };
  !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

  export default firebase;