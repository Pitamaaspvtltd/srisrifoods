import React from 'react';
import 'aos/dist/aos.css';
import './welcome.css';
import { Link } from 'react-router-dom';
import riceBowlImage from '../assets/Rice.png';
import logo2 from '../assets/Logo_01.png';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        
        <div className="image-container" data-aos="fade-up">
          <div className="rice-bowl">
            <img src={riceBowlImage} alt="Bowl of rice with wooden scoop" />
          </div>
        </div>
        
        <div className="content-container" data-aos="fade-up">
          <h2 className="welcome-heading" data-aos="fade-up">Welcome to</h2>
          
          <div className="logo-container" data-aos="zoom-in" data-aos-delay="200">
            <img src={logo2} alt="Sri Sri Foods Logo" />
          </div>
          
          <div className="description" data-aos="fade-up" data-aos-delay="400">
            <p>
              Established in 1987, Sri Sri Foods has earned a trusted name in the global rice industry by consistently delivering premium-quality rice varieties. With over three decades of excellence, we proudly cater to markets across the Middle East and CIS Asian countries, bringing the authentic taste of India to international kitchens.
              We specialize in all types of rice varieties, carefully sourced, processed and packed to meet the highest standards of purity, aroma and grain quality. From Basmati to Non-Basmati, our diverse portfolio meets the culinary needs of global consumers.
            </p>
          </div>
          
         <div className="cta-container">
  <Link to="/about">
    <button className="view-more-btn">
      <span>View More</span>
    </button>
  </Link>
</div>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
