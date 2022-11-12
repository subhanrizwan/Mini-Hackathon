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



let creat_logo =document.getElementById('creat-logo')
creat_logo.addEventListener("click",()=>{
    console.log("subhan");
    window.location='3rdpage/index.html'
    // location='classDashboard.html'
}) 
let Creat_student = document.getElementById("Creat-student")
Creat_student.addEventListener("click",()=>{
    window.location='3rdpage/index2.html'
})

let cards = document.querySelector('.cards-child')
window.onload = async()=>{
    const q = (collection(db, "creatClass"))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
    console.log(doc.data());
    cards.innerHTML +=`
    <div class="card" style="width: 18rem;">
              
        <div class="card-body">

        <div class="div5"><h4>${doc.data().input5}</h4>(<b>${doc.data().input4}</b>)</div>
    <div class="div3"><h2>${doc.data().input3}</h2></div>
     
     
    </div>
  </div>
    `

    //   console.log(doc.id, " => ", doc.data());
    })
  }

//   let cardss = document.querySelector('.cards-child2')
// window.onload = async()=>{
//     const q = (collection(db, "Student"))
//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach((doc) => {
//     console.log(doc.data());
   
//     //   console.log(doc.id, " => ", doc.data());
//     })
//   }