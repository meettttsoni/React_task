import React, { useEffect, useRef, useState } from 'react'

export default function Practext() {
  const[text,settext]=useState('')
  const[wpm,setwpm]=useState(0)
  const[second,setsecond]=useState(0)
  const[show,setshow]=useState(false)
  const timer=useRef(null)

  function handle(e){
    settext(e.target.value)
    if(!timer.current){
      timer.current=setInterval(()=>{
        setsecond(s=>s+1)
      },1000)
    }
  }
  function add(){
    clearInterval(timer.current)
    timer.current=null
    setshow(true)

   setTimeout(()=>{
    setshow(false)
    settext('')
   },3000)
  }
  useEffect(()=>{
   const word=text.trim().split().length;
   if(second>0){
    setwpm(Math.round((word/second)*60));
   }
  })
  const char=text.replace(/\s/g,'').length;
  
  return (
    <div>
      <textarea placeholder='nameeeee' onChange={handle} value={text}></textarea>
      <button onClick={add}>add</button>
      {show &&(
        <>
          <p>char:{char}</p>
          <p>wpm:{wpm}</p>
          <p>time:{second} second</p>
        </>
      )

      }
    </div>
  )
}
