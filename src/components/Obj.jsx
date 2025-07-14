import React, { useState } from 'react'

const Obj = () => {
    const[state,setState]=useState('')
    const[text,setText]=useState([])
    const[edit,setEdit]=useState(null)

    function addText(e){
        setState(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(edit!==null){
            const updateText=[...text]
            updateText[edit]=state
            setText(updateText)
            setEdit(null)
        }
        else{
            setText([...text,state])
        }
        setState('')
    }
  
   
    function handleedit(i){
        setState(text[i])
        setEdit(i)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={state} onChange={addText} />
        <input type="submit" />
      </form>
      <p>{
      text.map((el,i)=>{
        return <>
        <li>{el}</li>
        <button onClick={()=>handleedit(i)}>Edit</button>
        </> 
      })
      }</p>
    </div>
  )
}

export default Obj
