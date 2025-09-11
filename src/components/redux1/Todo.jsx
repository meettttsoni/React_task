import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { myAction } from './Action';


export default function Todo() {
    const[state,setState]=useState('');
    const dispatch=useDispatch();
    function addtext(e){
        setState(e.target.value)
    }
    function handlesubmit(e){
        e.preventDefault();
      dispatch(myAction(state))
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
