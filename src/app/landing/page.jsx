import React from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/LNavBar';
import Testimonials from '../../components/Testimonials';
import Footer from '../../components/Footer';

// Static testimonials fallback
const staticTestimonials = [
  {
    name: 'Alice Smith',
    quote: 'This platform changed the way I connect with my tribe!',
    image: '/default.jpg',
    role: 'Community Member',
  },
  {
    name: 'Bob Johnson',
    quote: 'A fantastic place to share and learn.',
    image: '/default.jpg',
    role: 'Tribe Leader',
  },
  {
    name: 'Carol Lee',
    quote: 'I found my people here. Highly recommended!',
    image: '/default.jpg',
    role: 'Member',
  },
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Testimonials testimonials={staticTestimonials} />
      <Footer />
    </div>
  );
}
