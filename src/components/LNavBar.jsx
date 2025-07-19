import React from 'react'
import '../styles/NavBar.css'
import Link from 'next/link'
export default function NavBar() {
  return (
    <header className='navBar'>
        <div className='logo'>
            <p className='logoTitle'>TribeZone</p>
        </div>
        <div className='rightSide'>
            <Link className='signUpbtn' href='/signup'>Join Now</Link>
        </div>

    </header>
  )
}
