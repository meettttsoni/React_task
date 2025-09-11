import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase';
const auth = getAuth(app);

export default function Signin() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    function Login(){
        signInWithEmailAndPassword(auth,email,password).then((userCreential)=>{
            alert('success')
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
       <input type="text" value={email} name='email' onChange={(e)=>{setemail(e.target.value)}} />
      <input type="text" value={password} name='password' onChange={(e)=>{setpassword(e.target.value)}} />
      <button onClick={Login}>clickhhh</button>
    </div>
  )
}
