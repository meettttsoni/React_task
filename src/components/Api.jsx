import React, { useState, useEffect } from 'react'

function Api ()  {
    const[products,setproduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setproduct(data);
        })
        .catch(error=>console.error('Error:',error));
    },[]);
  return (
    <div>
      <ul>
        {products.map((item)=>(
            <li key={item.id}>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} width="100"></img>
                <p>${item.price}</p>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Api
