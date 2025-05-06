import React from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Content Creator",
        image: '/resources/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg',
        quote: "TribeZone has transformed how I connect with my audience. The communities are vibrant and engaging!"
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Startup Founder",
        image: "/resources/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.avif",
        quote: "I found my core user base through TribeZone communities. The platform's engagement tools are simply unmatched."
      },
      {
        id: 3,
        name: "Priya Patel",
        role: "Hobby Enthusiast",
        image: "/resources/istockphoto-1987655119-612x612.jpg",
        quote: "From a casual user to community leader in just months! TribeZone made it so easy to find people who share my passions."
      }
    ];
  
    return (
      <div className="testimonials-section">
        <h2 className="testimonials-title">What Our Users Say</h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-avatar">
                <img src={testimonial.image} alt={`${testimonial.name}`} />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
