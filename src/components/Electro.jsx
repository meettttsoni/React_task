import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Electro() {
    const[state,setstate]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics').then((res)=>{
            return res.json()
        }).then((data)=>{
            setstate(data)
        })
    },[])
  return (
    <div>
      <h1>
        {state.map((el,i)=>{
            return<>
                <Link to={`/productdetail/${el.id}`}>{el.title}</Link>
                <img src={el.image} />
                <li>{el.price}</li>
            </>
        })}
      </h1>
    </div>
  )
}
