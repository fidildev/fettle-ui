import React from 'react'
import { BiLogIn } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
    
      <div className="navbar-left">
        <span className="logo">
          <img src="assets/letterF.jpg" alt="fettle logo" className='logo-image' />
          Fettle
        </span>

      </div>

      <div className="navbar-center">
        
        <BsSearch className='search-icon'/>
        <input type="text" placeholder='do you want this?' className='search-input'/>

      </div>

      <div className="navbar-right">
        <ul>
            <li>Sign Up</li>
            <li> Login</li>
        </ul>
        <BiLogIn />
      </div>
    </div>
  )
}

export default Navbar