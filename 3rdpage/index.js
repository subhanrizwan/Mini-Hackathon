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
const db = getFirestore();


let Classes_Timings = document.getElementById('input1')
let Shedule = document.getElementById('input2')
let Teachers_name = document.getElementById('input3')
let Section_name = document.getElementById('input4')
let Course_name = document.getElementById('input5')
let Batch_number = document.getElementById('input6')

let submitbtn = document.getElementById('submit-btn')
submitbtn.addEventListener("click",async()=>{
    console.log(Classes_Timings.value);

    const docRef = await addDoc(collection(db, "creatClass"), {
        input1:Classes_Timings.value,
        input2:Shedule.value,
        input3:Teachers_name.value,
        input4: Section_name.value,
        input5:Course_name.value,
        input6:Batch_number.value,
        
      });
      
      // console.log(docRef.input1);
      // window.location = 'dBoard.html'
      // console.log("Document written with ID: ", docRef;

});
