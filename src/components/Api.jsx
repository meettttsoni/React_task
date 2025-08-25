import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Api() {
  const[data,setdata]=useState({name:'',age:'',price:''})
  const[list,setlist]=useState([])
  const[edit,setedit]=useState(null)
  const[search,setsearch]=useState('')
  const [sortprice, setsortPrice] = useState("")
  useEffect(()=>{
    fetchApi();
  },[search])
  const fetchApi=async()=>{
    const info=await axios.get("http://localhost:3000/product",{
      params:{name:search}
    })
    setlist(info.data)
  }
  const sortedProducts = [...list].sort((a, b) => {
    if (sortprice === "lowToHigh") {
        return Number(a.price) - Number(b.price);
    } else if (sortprice === "highToLow") {
        return Number(b.price) - Number(a.price);
    }
});

  function handle(e){
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submit=async(e)=>{
    e.preventDefault();
    if(edit){
      await axios.put(`http://localhost:3000/product/${edit}`,data)
    }
    else{
    await axios.post("http://localhost:3000/product",data);
    }
    setdata({name:'',age:'',price:''})
    fetchApi();
  }
  const del=async(id)=>{
    await axios.delete(`http://localhost:3000/product/${id}`);
    fetchApi()
  }
  const edi=async(i)=>{
    setdata(i)
    setedit(i.id)
  }

  return (
    <div>
      <input type="text" name='search' value={search} onChange={((e)=>{setsearch(e.target.value)})} />
      <select onChange={(e) => setsortPrice(e.target.value)} value={sortprice}>
                <option value="">Sort By Price</option>
                <option value="lowToHigh">Low To high</option>
                <option value="highToLow">High To Low</option>
            </select>
      <input type="text" name='name' placeholder='name' value={data.name} onChange={handle} />
      <input type="text" name='age' placeholder='age' value={data.age} onChange={handle} />
      <input type="text" placeholder='enter price' name="price" value={data.price} onChange={handle} />
      <input type="submit" onClick={submit} />
      <ul>
        {sortedProducts.map((i)=>(
          <li key={i.id}>
            {i.name}  {i.age} {i.price}
            
            <button onClick={()=>del(i.id)}>deleet</button>
            <button onClick={()=>edi(i)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
        }

