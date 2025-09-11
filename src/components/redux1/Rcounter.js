import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
export default function Rcounter() {
      const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
       <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>{' '}
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>{' '}
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}