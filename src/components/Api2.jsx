import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Api() {
  const[data,setdata]=useState({name:'',age:''})
  const[list,setlist]=useState([])
  const[edit,setedit]=useState(null)
  useEffect(()=>{
fetchApi()
  },[])
  const fetchApi=async()=>{
    const info=await axios.get('http://localhost:3000/product')
    setlist(info.data);
  }
  function handle(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submit=async(e)=>{
    e.preventDefault();
    if(edit){
      await axios.put(`http://localhost:3000/product/${edit}`,data)
      setedit(null);
    }else{
      await axios.post("http://localhost:3000/product",data);
    }
 
    setdata({name:'',age:''})
    fetchApi();
  }
  const del=async(id)=>{
    await axios.delete(`http://localhost:3000/product/${id}`);
    fetchApi();
  }
  const edi=(i)=>{
    setdata(i)
    setedit(i.id);
  }
  return (
    <div>
      <input type="text" name='name'placeholder='name' value={data.name} onChange={handle} />
      <input type="text" name='age' placeholder='age' value={data.age}  onChange={handle}/>
      <input type="submit" onClick={submit}/>
      <ul>
        {list.map((i)=>(
          <li key={i.id}>
            {i.name} {i.age}
            <button onClick={()=>del(i.id)}>dele</button>
            <button onClick={()=>edi(i)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
