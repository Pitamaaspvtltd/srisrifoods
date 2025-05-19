import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img 
            src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745923152/Logo_wystlp.png" 
            alt="Sri Sri Foods Logo" 
            className="footer-logo"
          />
  <div className="social-icons">
  <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
    <img src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/fb_gwmecn.png" alt="Facebook" />
  </a>
  <a href="https://twitter.com" className="social-icon twitter" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/x_oib8ko.png" 
      alt="X" 
    />
  </a>
  <a href="https://instagram.com" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/insta_gh9ebp.png" 
      alt="Instagram" 
    />
  </a>
  <a href="https://youtube.com" className="social-icon youtube" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921916/youtube_ioo7bb.png" 
      alt="YouTube" 
    />
  </a>
</div>

        </div>

        <div className="footer-links-section">
          <div className="quick-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" target="_top">Home</Link></li>
              <li><Link to="/about" target="_top">About us</Link></li>
              <li><Link to="/brands" target="_top">Brand</Link></li>
              <li><Link to="/private" target="_top">Private Labelling</Link></li>
              <li><Link to="/contact" target="_top">Contact</Link></li>
            </ul>
          </div>

          <div className="product-range">
            <h3 className="footer-heading">Range</h3>
            <ul className="footer-links-list">
              <li><Link to="/product/Indian Basmati Rice" target="_top">Indian Basmati Rice</Link></li>
              <li><Link to="/product/Indian Non Basmati Rice" target="_top">Indian Non Basmati Rice</Link></li>
              <li><Link to="/product/Pesticide-Free Rice" target="_top">Pesticide-Free Rice</Link></li>


              

            </ul>
          </div>

          <div className="company-info">
            <h2 className="company-name">SRI SRI FOODS</h2>
            <p className="company-address">2655, Naya Bazar, Delhi -110006</p>
            <p className="company-address">KH. NO. 363/I, VIII, Hamidpur, Delhi -110036</p>
            <p className="company-contact">Mob.: +91 8130388382 ,
+91 9625507543</p>
            {/* <p className="company-contact">Website : www.srisrifoods.com</p> */}
            <p className="company-contact">E-mail : sales@srisrifoods.com</p>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
  <p>COPYRIGHT © 2025 Sri Sri Foods, All Rights Reserved.</p>
  <p className="created-by">
    Created By : <a href="https://pitamaas.com" target="_blank" rel="noopener noreferrer">Pitamaas Pvt. Ltd.</a>
  </p>
</div>

    </footer>
  );
};

export default Footer;