import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './login.css'

function Login() {
    const {loginWithRedirect} =useAuth0();

  return (
    <div className='login-container'>
        <button className='login-btn' onClick={loginWithRedirect}>Log In Here</button>
    </div>
  )
}

export default Login