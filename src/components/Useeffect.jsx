import React,{useEffect,useState} from 'react'

export default function Useeffect() {
const[state,setState]=useState("https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D")
useEffect(()=>{
    console.log("mount phase")
    return()=>{
        alert("unmount")
    }
},[])
  return (
    <div>
      <img src={state} />
      <button onClick={()=>{setState("https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=")}}>update</button>
    </div>
  )
}

