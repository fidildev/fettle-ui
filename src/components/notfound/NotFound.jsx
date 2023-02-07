import React from 'react'
import {BiRightArrowCircle} from 'react-icons/bi'
import './notfound.css'

function NotFound() {
  return (
    <div className='notfound-container'>
        <h3>Sorry, we couldn't find that page</h3>
        <h4>Go back to our main page to continue</h4>
        <a href="/"><button>Back to main page {<BiRightArrowCircle />}</button></a>
    </div>
  )
}

export default NotFound