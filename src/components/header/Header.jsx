import React from 'react'
import { BiLogIn } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import './header.css'


function Header() {
  return (
    <div className='header-container'>
    
      <div className="header-left">
        <span className="logo">
          <img src="assets/letterF.jpg" alt="fettle logo" className='logo-image' />
          Fettle
        </span>

      </div>

      <div className="header-center">
        
        <BsSearch className='search-icon'/>
        <input type="text" placeholder='do you want this?' className='search-input'/>

      </div>

      <div className="header-right">
        Login
        <BiLogIn />

      </div>


    </div>
  )
}

export default Header