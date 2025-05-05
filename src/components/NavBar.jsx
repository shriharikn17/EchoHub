import React from 'react'
import '../styles/NavBar.css'
export default function NavBar() {
  return (
    <header className='navBar'>
        <div className='logo'>
            <p className='logoTitle'>TribeZone</p>
        </div>
        <div className='rightSide'>
            <button className='signUpbtn'>Join the Movement</button>
        </div>

    </header>
  )
}
