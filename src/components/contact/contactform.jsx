import React, { useState, useEffect } from 'react';
import './contactform.css';
import tractorVideo from '../../assets/tractor.mp4';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate email sending (replace with actual EmailJS integration)
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Banner Section with Video for Desktop and Image for Mobile */}
      <div className="contact-banner">
        {!isMobile ? (
   <video className="banner-video" autoPlay muted loop playsInline>
  <source src={tractorVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>


        ) : null}
        <div className="banner-overlay">
          <h2>Contact Us</h2>
          {/* <p>We'd love to hear from you!</p> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="contact-content">
        {/* Combined Contact Info and Form in Grid Container */}
        <div className="contact-grid-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="info-item">
              <i className="icon location-icon"></i>
              <div>
                <h3>Our Location</h3>
                <p>2655, Naya Bazar, Khari Baoli, Old Delhi, New Delhi, Delhi, 110006</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon phone-icon"></i>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon email-icon"></i>
              <div>
                <h3>Email Address</h3>
                <p>info@srisrifoods.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon time-icon"></i>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            {submitted ? (
              <div className="success-message">
                <p>Thank you for reaching out! We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section with Locate Us Heading */}
        <div className="map-section">
          <h2>Locate Us</h2>
          <div className="map-container">
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2081.7562106009846!2d77.21720927155661!3d28.657243248827882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0d425b1505%3A0xe13e24d0cf33a408!2sSri%20Sri%20Foods!5e0!3m2!1sen!2sin!4v1746515936894!5m2!1sen!2sin" 
  width="100%" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="Sri Sri Foods Location">
</iframe>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="contact-cta">
        <h2>Join Our Community</h2>
        <p>Follow us on social media for recipes, updates, and special offers!</p>
        <div className="social-icons1">
        <div className="social-icons">
  <a href="https://facebook.com/pitamaas" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
    <img alt="Facebook" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/fb_gwmecn.png" />
  </a>
  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
    <img alt="Instagram" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/insta_gh9ebp.png" />
  </a>
  <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
    <img alt="X" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/x_oib8ko.png" />
  </a>
  <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
    <img alt="YouTube" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/youtube_ioo7bb.png" />
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;