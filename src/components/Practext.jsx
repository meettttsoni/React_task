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
    function submit(){
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
            setwpm(Math.round((word/second)*60))
        }
    })
    const char=text.replace(/\s/g,'').length;
  return (
    <div>
      <textarea onChange={handle} value={text} placeholder='hi'></textarea>
      <button onClick={submit}>add</button>
      {show && (
        <>
            <p>wpm:{wpm}</p>
            <p>char:{char}</p>
            <p>time:{second}</p>
            </>
      )

      }
    </div>
  )
}
