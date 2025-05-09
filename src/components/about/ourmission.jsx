import React from 'react';
import './ourmission.css';

const WhatWeDo = () => {
  const services = [
    {
      id: 'premium-products',
      icon: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746773020/Icon_02_uoyimh.png',
      title: 'Premium Products',
      description: 'We provide customers with the service of Premium quality Basmati Rice, Non-Basmati Rice, export from India.'
    },
    {
      id: 'custom-packaging',
      icon: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746773020/Icon_01_kxl1wp.png',
      title: 'Custom Packaging',
      description: 'From helping you find the right buyers to packaging your food and sending it off, our complete services ensure that you face absolutely no difficulties.'
    },
    {
      id: 'global-export',
      icon: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746773019/Icon_04_ji7zy0.png',
      title: 'Global Export',
      description: 'Be it Europe, middle-east, the Americas, or wherever you want the food to be exported, we make sure that the job is done.'
    },
    {
      id: 'timely-delivery',
      icon: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746773019/Icon_03_ocwxtj.png',
      title: 'Timely Delivery',
      description: 'We ensure that the food commodities and ready to eat food items are delivered to the designated destination on right time.'
    }
  ];

  return (
    <section className="what-we-do-section" data-aos="fade-up">
      <div className="what-we-do-container">
        <h1 className="what-we-do-title" data-aos="fade-up">What We Do</h1>
        <p className="what-we-do-subtitle" data-aos="fade-up" data-aos-delay="100">
          We provide premium food export services with a focus on quality, reliability
          and customer satisfaction.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
            >
              <div className="service-icon-container">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
