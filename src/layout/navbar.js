import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'


export default function Navbar() {
  return (
    <nav>
        <span> Navbar </span>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to='/todo'>To do</Link>
    </nav>
  )
}
