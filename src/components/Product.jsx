import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
    <div>
      <Link to="Countt">Counttt</Link>
      <Link to="Obj">object</Link>
     
    </div>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}
