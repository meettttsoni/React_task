import React,{useRef} from 'react'

export default function Todoref() {
    const nameref=useRef(null)
    const emailref=useRef(null)
    const displayref=useRef()

    function handleSubmit(e){
        e.preventDefault()
        let name=nameref.current.value;
        let email=emailref.current.value;
        displayref.current.innerHTML=`
        <p>${name}</p>
        <p>${email}</p>
        `
        console.log(nameref.current.value);
        console.log(emailref.current.value);
    }
  return (
    <div>
      <h1>todo</h1>
      <form onClick={handleSubmit}>
       name: <input type="text" name="name" ref={nameref}/>
      email: <input type="text" name="email" ref={emailref}/>
        <input type="submit" /> 
        <p ref={displayref}></p>
      </form>
    </div>
  )
}
