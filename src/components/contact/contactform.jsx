import React, { useState, useEffect, useRef } from 'react';
import './contactform.css';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Try to play the video when component mounts
useEffect(() => {
  const videoElement = videoRef.current;
  if (videoElement) {
    const playPromise = videoElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video playback started successfully');
          // setVideoLoaded(true); ← removed
        })
        .catch(error => {
          console.error('Video playback failed:', error);
          setVideoError(true);
        });
    }
  }
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs.send(
      'service_slzig6k',
      'template_y0krn4j',
      templateParams,
      'uE0CuWJsh78hqnywh'
    ).then(
      (res) => {
        toast.success('Message sent successfully!');
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      },
      (err) => {
        toast.error('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <div className="contact-page">
      <Toaster position="top-right" />
      <div className="contact-banner">
        {!isMobile && (
          <>
            <video 
  ref={videoRef}
  autoPlay 
  muted 
  loop 
  playsInline 
  width="100%"
  onError={() => setVideoError(true)}
  style={{ display: videoError ? 'none' : 'block' }}
>

              <source
                src="https://res.cloudinary.com/dwfn4hylt/video/upload/v1747378967/tractor2_h264_fixed_bogto2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback image in case video fails */}
            {videoError && (
              <img 
                src="https://res.cloudinary.com/dwfn4hylt/video/upload/v1747378967/tractor2_h264_fixed_bogto2.mp4" 
                alt="Tractor in field" 
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </>
        )}
        <div className="banner-overlay">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div className="contact-content">
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
                <p> +91 8130388382 , +91 9625507543</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon email-icon"></i>
              <div>
                <h3>Email Address</h3>
                <p>sales@srisrifoods.com</p>
                <p>shoubhitjain@srisrifoods.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon time-icon"></i>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday - Saturday: 9am - 6pm</p>
                {/* <p>Saturday: 10am - 4pm</p> */}
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
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,15}"
                    title="Enter a valid phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>

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
              title="Sri Sri Foods Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <h2>Join Our Community</h2>
        <p>Follow us on social media for recipes, updates, and special offers!</p>
        <div className="social-icons1">
          <a href="https://facebook.com/pitamaas" target="_blank" rel="noopener noreferrer">
            <img alt="Facebook" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/fb_gwmecn.png" />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <img alt="Instagram" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/insta_gh9ebp.png" />
          </a>
          <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
            <img alt="X" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/x_oib8ko.png" />
          </a>
          <a href="https://www.linkedin.com/yourpage" target="_blank" rel="noopener noreferrer">
            <img alt="linkedin" src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1747810592/Link_eeouwh.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;