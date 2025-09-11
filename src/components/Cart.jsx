import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './reduxproject/Action';
import { decrement } from './reduxproject/Action';
export default function Cart() {
    const data=useSelector((store)=>store);
    const dispatch = useDispatch();
    console.log(data)
    const totalprice=data.reduce((acc,item)=>{
        return acc+item.price*item.quantity
    },0)
    
  return (
    <div>
      {
        data.map((el,i)=>{
            return<>
                <div key={i}>
                    <img src={el.img} style={{width:'300px'}} />
                    <p>price:{el.price}</p>
                    <p>quantity:{el.quantity}</p>
                    <button onClick={()=>dispatch(increment(i))}>+</button>
                    <button onClick={()=>dispatch(decrement(i))}>-</button>
                    <h1>{totalprice}</h1>
                </div>
            </>
        })
      }
    </div>
  )
}
