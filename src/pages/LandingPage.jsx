import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
export default function LandingPage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Testimonials/>
            <Footer/>
        </>
    )
}
