import React from 'react'
import { BsSearch } from 'react-icons/bs';
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <span className="logo">
          <img src="assets/letterF.jpg" alt="fettle logo" className='logo-image' />
          <Link className='links' to='/'>Fettle</Link>
        </span>
      </div>
      <div className="navbar-center">
        <BsSearch className='search-icon'/>
        <input type="text" placeholder='do you want this?' className='search-input'/>
      </div>
        <div className="navbar-right">
            <Link className='links' to='/login'> Log In</Link>
            <Link className='links' to='/newaccount'> New Account</Link>  
      </div>
    </div>
  )
}

export default Navbar