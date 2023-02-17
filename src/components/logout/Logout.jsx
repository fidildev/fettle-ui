import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './logout.css'

function Logout() {
    const {logout} =useAuth0();
  return (
    <div className='logout-container'>
        <button className='logout-btn' onClick={() =>logout({logoutParams:{returnTo:window.location.origin}})}>Logout now</button>
    </div>
  )
}

export default Logout