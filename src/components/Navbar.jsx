import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/Todoprac'>todo</Link>
      <Link to='/Practext'>Practext</Link>
      <Link to='/Focus'>Focus</Link>
    </div>
  )
}
