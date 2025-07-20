// src/components/Testimonials.jsx

import '../styles/Testimonials.css';

export default function Testimonials({ testimonials = [] }) {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.length === 0 ? (
        <p className="empty-message">No testimonials available.</p>
      ) : (
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-quote">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
