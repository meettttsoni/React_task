import React, { useState } from 'react'
import { myContext } from './Context'
import BBB from './BBB'
export default function AAA() {
    const[state,setState]=useState({name:'meet',email:'meet2020@gmail.com'})
  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{state.email}</h1>
      <myContext.Provider value={state}>
    <BBB/>
      </myContext.Provider>
    </div>
  )
}
