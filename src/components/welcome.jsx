// WelcomeSection.jsx
import React from 'react';
import './welcome.css';
import riceBowlImage from '../assets/Rice.png'; 
import logo2 from '../assets/Logo_01.png';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        
        <div className="image-container">
          <div className="rice-bowl">
            <img src={riceBowlImage} alt="Bowl of rice with wooden scoop" />
          </div>
        </div>
        
        <div className="content-container">
          <h2 className="welcome-heading">Welcome to</h2>
          
          <div className="logo-container">
            <img src={logo2} alt="Sri Sri Foods Logo" />
          </div>
          
          <div className="description">
            <p>
              Established in 1987, Sri Sri Foods has earned a trusted name in the global rice industry by consistently delivering premium-quality rice varieties. With over three decades of excellence, we proudly cater to markets across the Middle East and CIS Asian countries, bringing the authentic taste of India to international kitchens.
              {/* <br /><br /> */}
              We specialize in all types of rice varieties, carefully sourced, processed and packed to meet the highest standards of purity, aroma and grain quality. From Basmati to Non-Basmati, our diverse portfolio meets the culinary needs of global consumers.
              {/* <br /><br />
              Certified with ISO and FSSAI, Sri Sri Foods is committed to maintaining world-class food safety and quality assurance at every stage of our supply chain. Our dedication to quality, integrity and customer satisfaction continues to drive our growth as a globally trusted rice brand. */}
            </p>
          </div>
          
          <div className="cta-container">
            <button className="view-more-btn">
              <span>View More</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
