import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/LNavBar'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import { getTestimonials } from '../../lib/contentful';
export default async function Home() {
  let testimonials = [];
  try {
    testimonials = await getTestimonials();
  } catch (error) {
    console.error('Error fetching testimonials in page.jsx:', error.message);
  }

  return (
    <div>
      <NavBar />
      <Hero />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}
