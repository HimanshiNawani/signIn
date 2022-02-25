import React from "react";
import "./style.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0iSI9sUTme_NSCwR8bXZtNE28Ro2PFw8",
  authDomain: "testing-30bea.firebaseapp.com",
  projectId: "testing-30bea",
  storageBucket: "testing-30bea.appspot.com",
  messagingSenderId: "677771811730",
  appId: "1:677771811730:web:2cf0d7f19ead71357d7f4b",
  measurementId: "G-RPC8404WDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {

  const emailUp = React.createRef(null);
  const passUp = React.createRef(null);
  const emailIn = React.createRef(null);
  const passIn = React.createRef(null);
 // const test = React.createRef(null);

 function onSignUp(){
// console.log(emailUp.current.value)
const auth = getAuth();
createUserWithEmailAndPassword(auth, emailUp.current.value, passUp.current.value)
  .then((userCredential) => {
    // Signed in 
    console.log("welcome")
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("get Lost")
    // ..
  });
 }

 function onSignIn(){
// console.log(emailIn.current.value)
const auth = getAuth();
signInWithEmailAndPassword(auth, emailIn.current.value, passIn.current.value)
  .then((userCredential) => {
    // Signed in 
    
    alert("Log was successfull")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Log in Unsuccessfull")

  });
 }


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div> SignUp
      </div>
      <div><input placeholder = "email" ref= {emailUp} />
      <input placeholder = "password" ref = {passUp}/>
      <button onClick ={onSignUp} >SignUp</button>
      </div>
<br/>
      <div> SignIn
      </div>
      <div><input placeholder = "email" ref={emailIn}/>
      <input placeholder = "password"  ref={passIn} />
      <button onClick ={onSignIn}>SignIn</button>
      </div>


    </div>
  );
}
