import React from 'react'

export default function DNavbar() {
    return (
        <header className='navBar'>
            <div className='leftPart'>
                <p className='title'>TribeZone</p>
            </div>
            <div className='rightPart'>
                <a  href='' className='userProfileBtn'>Profile</a>
                <button className='logoutBtn'>Logout</button>
            </div>
        </header>

    )
}
