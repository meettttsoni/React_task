import React, {useEffect, useRef, useState} from 'react'

export default function Timeruse() {
    const[state,setState]=useState(0)
    const id=useRef(0)
    console.log(id)
    function Start(){
        id.current=setInterval(()=>{
            setState((prevState)=>prevState+1)
            console.log(id.current)
        },1000)
    }
    function Stop(){
        clearInterval(id.current)
    }
    function Reset(){          
    setState(0);
    }
  return (
    <div>
      <h1>Timer is {state}</h1>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
