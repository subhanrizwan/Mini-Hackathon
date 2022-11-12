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

// window.onload = async()=>{
//     const q = (collection(db, "creatClass"))
//     const querySnapshot = await getDocs(q)
//     querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//     //   console.log(doc.id, " => ", doc.data());
//     })
//   }
let Name = document.getElementById('input1')
let Father_Name = document.getElementById('input2')
let roll = document.getElementById('input3')
let contact = document.getElementById('input4')
let Cnic = document.getElementById('input5')
let Course = document.getElementById('input6')
let Section = document.getElementById('input7')
let pic = document.getElementById('input8')

let student = document.getElementById('submit-student')
student.addEventListener("click",async()=>{
    // console.log(Classes_Timings.value);

    const docRef = await addDoc(collection(db,"Student"), {
        input1:Name.value,
        input2:Father_Name.value,
        input3:roll.value,
        input4:contact.value,
        input5:Cnic.value,
        input6:Course.value,
        input6:Section.value,
        
      });
      swal("Student Registered", "you have registered", "success");
      input1.value = ""
      input2.value = ""
      input3.value = ""
      input4.value = ""
      input5.value = ""
      input6.value = ""
      input7.value = ""
      input8.value = ""
  
    })
