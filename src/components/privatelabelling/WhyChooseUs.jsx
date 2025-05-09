import React from 'react';
import './WhyChooseUs.css';
// import { GrainIcon, PackageOpen, Scale, Globe } from './Icons'; // Adjust import based on your icon setup

function WhyChooseUs() {
  return (
    
    <div className="why-choose-us">
      <h3 className="why-title" data-aos="fade-up">Why Choose Us</h3>
      <div className="why-grid">
        <div className="why-card" data-aos="zoom-in">
          <div className="why-card-content">
            <div className="why-icon-container">
            <i className="fa-solid fa-wheat-awn"></i>
            </div>
            <h4 className="why-card-title">Wide Variety of Rice</h4>
            <p className="why-card-text">
              Basmati, Non-Basmati, Sona Masoori, IR64 & more varieties to choose from.
            </p>
          </div>
        </div>

        <div className="why-card" data-aos="zoom-in">
          <div className="why-card-content">
            <div className="why-icon-container">
            <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h4 className="why-card-title">Custom Branding & Packaging</h4>
            <p className="why-card-text">
              Design your own labels, bags & pouches that represent your brand identity.
            </p>
          </div>
        </div>

        <div className="why-card" data-aos="zoom-in">
          <div className="why-card-content">
            <div className="why-icon-container">
            <i className="fa-solid fa-maximize"></i>
            </div>
            <h4 className="why-card-title">Low Minimum Order Quantities</h4>
            <p className="why-card-text">
              Ideal for startups and bulk buyers with flexible order quantities.
            </p>
          </div>
        </div>

        <div className="why-card" data-aos="zoom-in">
          <div className="why-card-content">
            <div className="why-icon-container">
            <i className="fa-solid fa-earth-asia"></i>
            </div>
            <h4 className="why-card-title">Global Export Ready</h4>
            <p className="why-card-text">
              Compliant packaging for international markets with all required certifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
