import React, { useRef } from 'react'

export default function Focus() {
    const nameref=useRef(null)
    const pref=useRef(null)
    function handle(e){
        e.preventDefault()
        nameref.current.focus()
    }
    function color(){
        pref.current.style.backgroundColor='aqua';
    }
  return (
    <div>
        <form onSubmit={handle}>
        name:  <input type="text" ref={nameref}/>
        <p ref={pref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sint.</p>
        <button onClick={color}>color</button>
    <input type="submit" />
        </form>
   
    </div>
  )
}
