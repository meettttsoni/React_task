import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { myaction } from './Action';

export default function Todoo() {
  const[state,setstate]=useState('')
  const dispatch=useDispatch()
  function addtext(e){
    setstate(e.target.value);
  }
  function handlesubmit(e){
    e.preventDefault();
   dispatch(myaction(state))
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={addtext} />
        <input type="submit" />
      </form>
    </div>
  )
}
