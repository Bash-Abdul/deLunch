import React from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="an image" />
        </div>

        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>

  )
}

export default Navbar