import React from 'react'
import '../styles/NavBar.css'
import Link from 'next/link'
export default function NavBar() {
  return (
    <header className='navBar'>
        <div className='logo'>
            <Link className='logoTitle' href='/landing'>TribeZone</Link>
        </div>
        <div className='rightSide'>
            <Link className='signUpbtn' href='/signup'>Join Now</Link>
        </div>

    </header>
  )
}
