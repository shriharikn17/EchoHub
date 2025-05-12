import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className='hero'>
        <div className='heroContent'> 
            <p className='heroTitle'>Welcome to</p>
            <p className='heroLogo'>TribeZone</p>
            <h2 className='tagline'>Find your Tribe,<span className='taglineHighlight'> Own your Zone.</span></h2>
            <div className='heroSubtitle'>
              <p>TribeZone is where passion meets people.</p>
              <p>Discover interest-based communities, share ideas,</p>
              <p>and thrive in your personalized zone of belonging.</p>  
            </div>
        </div>
       
          <button className='signUp'>Join the Movement</button>
        

    </section>

    
  )
}
