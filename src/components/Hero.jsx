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
      <div className='exploreTribes'>
        <p className='popularTribeTitle'>Popular Tribes</p>
        <div className='popTribescard'>
          <div className='popTribecard-1'>
            <img src='/resources/QuantumComputer.jpg' className='popTribecardimg' alt='popTribeimg-1' />
            <p className='popTribename-1'>Quantum Computing</p>
            <p className='popTribedesc-1'>Where minds entangle to decode the quantum future.</p>
          </div>
          <div className='popTribecard-2'>
            <img src='/resources/ai.jpg' className='popTribecardimg' alt='popTribeimg-2' />
            <p className='popTribename-2'>Artificial Intelligence</p>
            <p className='popTribedesc-2'>Where intelligence evolves — together.</p>
          </div>
          <div className='popTribecard-3'>
            <img src='/resources/vintdrums.jpeg' className='popTribecardimg' alt='popTribeimg-3' />
            <p className='popTribename-3'>Music</p>
            <p className='popTribedesc-3'>Feel the vibe. Join the tribe.</p>
          </div>
        </div>
      </div>
      
      <div class="how-it-works-section">
        <h2 class="how-it-works-title">How It Works</h2>
        <div class="how-it-works-step">
          <div class="how-it-works-step-number">1</div>
          <p class="how-it-works-step-text"><b>Create or Join a Community:</b> Dive into your interests! Easily create a new community around a topic you're passionate about, or explore and join existing communities filled with like-minded individuals.</p>
        </div>
        <div class="how-it-works-step">
          <div class="how-it-works-step-number">2</div>
          <p class="how-it-works-step-text"><b>Share Your Thoughts and Media:</b> Contribute to the conversation by posting text updates, sharing images, videos, links, and more. Express yourself and connect with others through engaging content.</p>
        </div>
        <div class="how-it-works-step">
          <div class="how-it-works-step-number">3</div>
          <p class="how-it-works-step-text"><b>Interact and Engage:</b> Connect with fellow community members by liking, commenting on, and sharing posts. Participate in discussions, ask questions, and build meaningful connections within your chosen communities.</p>
        </div>
      </div>


    </section>


  )
}
