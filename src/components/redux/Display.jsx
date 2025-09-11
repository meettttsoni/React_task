import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction } from './Action'
import { editAction } from './Action'

export default function Display() {
  const data=useSelector((store)=>{return store})
  const dispatch=useDispatch()
  function del(i){
    dispatch(deleteAction(i))
  }
  function edi(i){
   var gg=prompt('enterre')
   if(gg){
    dispatch(editAction(i,gg))
   }
  }
  return (
    <div>
      {
        data.map((el,i)=>{
          return<>
            <li>{el}</li>
            <button onClick={()=>del(i)}>delete</button>
            <button onClick={()=>edi(i)}>edit</button>
          </>
        })
      }
    </div>
  )
}
