import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';




function Homepage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      text: "Found my dream home within weeks! The team was professional and made the entire process seamless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      text: "Excellent service and great property options. They understood exactly what I was looking for.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      text: "As a first-time buyer, I was nervous, but they guided me through every step. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section id="home" className="HomePage">
        <div className="textContainer">
          <div className="Wrapper">
            <h1 className="MainHeader">
              Find Real Estate & Get Your Dream Place
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus
              reiciendis quae, nobis nulla sed enim incidunt quam veniam rem! Non,
              accusamus obcaecati dolor odio atque debitis cum impedit assumenda.
            </p>

            <Link to="/list"> <button className="explore-btn">
              Explore Now
            </button></Link>
            
           
            <div className="Boxes">
              <div className="Box">
                <h1 className="Number">16+</h1>
                <h2 className="Description">Years Of Experience</h2>
              </div>
              <div className="Box">
                <h1 className="Number">200</h1>
                <h2 className="Description">Awards Gained</h2>
              </div>
              <div className="Box">
                <h1 className="Number">2000+</h1>
                <h2 className="Description">Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img src="/bg.png" alt="Real Estate" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">About Us</h2>
            <p className="about-text">
              With over 16 years of experience in the real estate industry, we've helped
              thousands of families find their perfect home. Our commitment to excellence
              and customer satisfaction has earned us over 200 awards and recognition as
              a leading real estate company.
            </p>
            <p className="about-text">
              We believe that finding a home is more than just a transaction—it's about
              discovering a place where memories are made and dreams come true. Our team
              of dedicated professionals works tirelessly to ensure every client receives
              personalized service and expert guidance throughout their real estate journey.
            </p>
          </div>
          <div className="about-image">
            <img src="/bg.png" alt="About Us" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Buy a Home</h3>
            <p>Browse through our extensive collection of properties and find your dream home with expert guidance.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💰</div>
            <h3>Sell Property</h3>
            <p>Get the best value for your property with our professional marketing and negotiation services.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔑</div>
            <h3>Rent a Place</h3>
            <p>Find the perfect rental property that fits your lifestyle and budget requirements.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Property Management</h3>
            <p>Comprehensive property management services to maximize your investment returns.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Real Estate Ave, City, State 12345</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@realestate.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button variant="contained" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      
    
    </div>
  );
}

export default Homepage;
