import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from '../Firebase';

const auth = getAuth(app);
const googleProvider= new GoogleAuthProvider()

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function Register(){
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            alert("sucess")
        })
        .catch((error)=>{
            console.log("error")
        });
    }

    function signupWithGoogle(){
        signInWithPopup(auth,googleProvider)
    }

    return (
        <div> 
            <h1>Register</h1>
            <input type="text" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" value={password} name='password' onChange={(e) => { setPassword(e.target.value) }} />
            <button onClick={Register}>Click</button>
            <button onClick={signupWithGoogle}>Sign in with google</button>
        </div>
    )
}