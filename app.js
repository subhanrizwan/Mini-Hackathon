import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // onAuthStateChanged,
    // deleteUser
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import {
    doc,
    setDoc,
    // getDoc,
    getFirestore,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    onSnapshot,
    orderBy,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDaa_Wn3NmrX2htonwmvF-CNQ5z0iexwFQ",
  authDomain: "smit-hackathon-29b5c.firebaseapp.com",
  projectId: "smit-hackathon-29b5c",
  storageBucket: "smit-hackathon-29b5c.appspot.com",
  messagingSenderId: "933359495520",
  appId: "1:933359495520:web:9c6ec6ad6311039547d605",
  measurementId: "G-DGGDRPYDLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



let login = document.getElementById('Login-user')
login.addEventListener("click", function () {

  let login_email = document.getElementById('login-email')
  let login_pass = document.getElementById('login-pass')

  signInWithEmailAndPassword(auth, login_email.value, login_pass.value)
    .then(async () => {

      const users = auth.currentUser
      console.log(users.uid);

     
    //   let btn = document.getElementById('main-cont')
    //   btn.style.display = 'none'

    //   let loader = document.getElementById('loader')
    //   loader.style.display = 'block'
      
      setTimeout(() => {
        window.location = 'sec-page.html'
      },3000);

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        swal("Sorry!", "User Not Found!", "error");
         })

})
