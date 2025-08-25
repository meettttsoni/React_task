import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function All() {
    const[product,setproduct]=useState([])
    useEffect(()=>{
        fetchApi();
    });
    const fetchApi=async()=>{
        const info=await axios.get("http://localhost:3000/data");
        setproduct(info.data);
    }
  return (
    <div>
        {product.map((el,i)=>(
           <>
            <p>{el.name}</p>
            <Link to={`/${el.category}`}>
                <img src={el.img} style={{width:"150px",height:"150px"}}></img>
            </Link>
            <h3>{el.price}</h3>
           </>
        ))}
      
    </div>
  )
}
