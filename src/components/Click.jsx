import React, { useCallback, useMemo, useState } from 'react'

function expensiveCal(num){
    console.log('cal');
    for(var i=1;i<10000000;i++){}
    return num*2
}
export default function Click() {
    const[count,setCount]=useState(0)
    const[other,setOther]=useState(0)
  const double=useMemo(()=>expensiveCal(count),[count])
  return (
    <div>
      <p>count is{count}</p>
      <p> double is{double}</p>
      <button onClick={(()=>{setOther(other+1)})}>click</button>
      <button onClick={(()=>{setCount(count+1)})}>click</button>
    </div>
  )
}
