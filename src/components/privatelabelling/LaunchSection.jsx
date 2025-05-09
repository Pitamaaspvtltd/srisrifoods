import React from 'react';
import './LaunchSection.css';
import { Link } from 'react-router-dom';

function LaunchSection() {
  return (
    <div className="launch-section">
      <div className="launch-para">
        <h3 className="launch-title" data-aos="fade-up">Launch Your Rice Brand Today</h3>
        <p className="launch-description" data-aos="fade-up">
          Ready to establish your presence in the rice market? Our team is here to guide you through every step of
          creating your own branded rice products.
        </p>
      </div>
      <div className="launch-buttons" data-aos="fade-out">
        <Link to="/contact" className="btn-primary" data-aos="fade-out">
          Get a Custom Quote
        </Link>
        <button className="btn-outline" data-aos="fade-out">Download Catalog</button>
      </div>
    </div>
  );
}

export default LaunchSection;
