import React, { useState } from 'react'
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { app } from '../Firebase';

const auth = getAuth(app);

export default function Register() {
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

function Register(){
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        alert('success');
    }).catch((error)=>{
        console.log(error)
    });
    
}
   
  return (
    <div>
      <input type="text" value={email} name='email' onChange={(e)=>{setemail(e.target.value)}} />
      <input type="text" value={password} name='password' onChange={(e)=>{setpassword(e.target.value)}} />
      <button onClick={Register}>click</button>

    </div>
  )
}
