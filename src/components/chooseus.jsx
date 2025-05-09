import React from 'react';
import './chooseus.css';

const WhyChooseUs = () => {
  return (
    
    <div className="why-choose-section">
      
      <div className="infra" data-aos="fade-up" data-aos-delay="300">
        <div className="infratext">
          <div className="infrahead">
            <h2>Infrastructure</h2>
          </div>
          <div className="infrapara">
            Our state-of-the-art processing units are equipped with advanced
            technology to ensure precision, hygiene and consistency in every grain.
          </div>
        </div>
      </div>
      <div className="why-choose-container">
        <h1 className="why-choose-heading" data-aos="fade-up" data-aos-delay="100">
          Why Choose us?
        </h1>

        <div className="why-choose-features">
          <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon quality-icon"></div>
            <div className="feature-content">
              <h3 className="feature-title">High Quality</h3>
              <p className="feature-description">
                Focused quality of highest order and undying faith
              </p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon taste-icon"></div>
            <div className="feature-content">
              <h3 className="feature-title">Taste & Aroma</h3>
              <p className="feature-description">
                Soil and climate of the region account for the unique aroma
              </p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-icon originality-icon"></div>
            <div className="feature-content">
              <h3 className="feature-title">Originality</h3>
              <p className="feature-description">
                Rich and unforgettable blend of tradition and exotic produce
              </p>
            </div>
          </div>

          <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-icon rice-icon"></div>
            <div className="feature-content">
              <h3 className="feature-title">Aged Rice</h3>
              <p className="feature-description">
                Aromatic, flavorful and defined by its long grains, Basmati Rice
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="world" data-aos="zoom-in" data-aos-delay="600">
        <div className="worldhead">
          <h2 data-aos="fade-up" data-aos-delay="700">
            Our Distributor Network
          </h2>
          <p data-aos="fade-up" data-aos-delay="900">
            Global Foods is a leading rice company in the country.
            The company exports to over 43 countries around the globe and has four
            internationally acclaimed brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
