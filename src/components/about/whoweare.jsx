import React from 'react';
import './whoweare.css';
import ricepics from '../../assets/RicePic.png';
import grainbag from '../../assets/grain-bag.png';

export default function WhoWeAreSection() {
  return (
    <div className="who-we-are-container" data-aos="fade-up">
      <div className="content-wrapper">
        <div className="top-section">
          <div className="content-section" data-aos="fade-right">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-text">
              We are a group of young and enthusiastic individuals who have 
              come together for a single goal of being a global leader in food 
              trading. We believe that India is known for our Basmati Rice, Non-
              Basmati, other food commodities spices and Food Products export is 
              key to our country's growth. Prioritizing in exporting Indian Basmati & 
              Nono-Basmati, we are also analysts and researchers who possess 
              an up to date global food market database to help you.
            </p>
          </div>
          <div className="image-section" data-aos="fade-left">
            <img 
              src={ricepics} 
              alt="Bowl of rice with rice plant" 
              className="rice-image" 
            />
          </div>
        </div>
      </div>

      <div className="bottom-section" data-aos="fade-up">
        <div className="content-wrapper">
          <h2 className="bottom-heading" data-aos="fade-up" data-aos-delay="100">
            Delivering Quality Grains to the World
          </h2>

          <div className="what-we-do-layout">
            <div className="what-we-do-text" data-aos="fade-right" data-aos-delay="200">
              <p>
                <span className="company-title">Sri Sri Foods</span> focusses on exporting food commodities with immense experience in the food industry. <span className="company-title">Sri Sri Foods</span> is a leading exporter of all kinds of Indian Basmati Rice, Non-Basmati Rice, to a number of destinations around the globe. With several partnerships with buyers across multiple countries, we have grown to be among the go-to companies for food export from India.
              </p>
              <p>
                We strive to serve our clients and the community with high-quality food grains as part of an effort to provide more hygienic, healthy, and tastier meals in homes across the world.
              </p>
            </div>

            <div className="what-we-do-image" data-aos="fade-left" data-aos-delay="200">
              <img src={grainbag} alt="Grains export" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
