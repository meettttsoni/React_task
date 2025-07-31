import React, { useEffect, useState } from 'react'

export default function Todoprac() {
  const sort=JSON.parse(localStorage.getItem('user')) || []
  const[data,setdata]=useState({name:'',age:''})
  const[list,setlist]=useState(sort)
  const[edit,setedit]=useState(null)

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(list))
  },[list])
  function handle(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  function add(){
    if(edit!==null){
      const u=[...list]
      u[edit]=data;
      setlist(u)
      setedit(null)
    }else{
      setlist([...list,data])
    }
   
    setdata({name:'',age:''})
  }
  function del(index){
    const u=[...list]
    u.splice(index,1)
    setlist(u)
  }
  function edi(index){
    setdata(list[index])
    setedit(index)
  }
  return (
    <div>
        <input type="text" placeholder='name' name='name' onChange={handle} value={data.name} />
        <input type="text" placeholder='age' name='age' onChange={handle} value={data.age} />
        <button onClick={add}>submit</button>
        <ul>
          {list.map((li,index)=>(
              <li>
                  {li.name} {li.age}
                  <button onClick={()=>del(index)}>delete</button>
                  <button onClick={()=>edi(index)}>edit</button>
              </li>
          ))}
        </ul>
    </div>
  )
}
