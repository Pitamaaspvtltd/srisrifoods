import React from 'react';
import './NameBrands.css';

// Brand images
import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';

// Icon images
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';

const NameBrands = () => {
  const brands = [
    { 
      name: "Eid Ka Chand", 
      type: "Traditional Basmati Rice", 
      img: b2,
      description: "Eid Ka Chand Traditional XXXL Classic  Basmati Rice is suitable for gourmet recipes and premium dining because of its golden colour and splendid aroma.",
      benefits: [
        "Long slender grains with a soft and fragrant finish",
        "Adds a touch of class to every dish",
        "Perfect for special occasions and fine dining"
      ]
    },
    { 
      name: "Eid Ka Chand", 
      type: "Traditional Basmati Rice", 
      img: b1,
      description: "Naturally parboiled, Eid Ka Chand Traditional Long Grain  Basmati Rice delivers the goodness of vitamins and unique texture for enhanced biryani or special occasion.",
      benefits: [
        "Long fluffy grains ideal for every dish preparation",
        "Rich in aroma and natural flavor",
        "Retains nutrients through natural parboiling process"
      ]
    },
    { 
      name: "Sri Sri Steam", 
      type: "Basmati Rice", 
      img: b3,
      description: "Famous for its aroma, Sri Sri 1121  Basmati Rice XXXL Premium is the rice of choice for daily meals and unusual occasions.",
      benefits: [
        "Light and fluffy texture when cooked",
        "Versatile for everyday meals or special occasions",
        "Perfect complement to pulao and various cuisines"
      ]
    },
  ];

  const packagingFeatures = [
    { 
      title: "Versatile Size Options", 
      description: "Available in 1kg, 5kg, and 20kg sizes, to meet a wide range of consumer needs and wants.",
      icon: brand1
    },
    { 
      title: "Premium 3D Pouches", 
      description: "1 Kg and 5 Kg packs are designed as 3D zip and slider pouches that can be reused for easy everyday use.",
      icon: brand2
    },
    { 
      title: "Crystal-Clear Side Gussets", 
      description: "The side gussets have visibility features and show the quality and shine of the basmati rice.",
      icon: brand3
    },
    { 
      title: "Durable 20kg Carton Packaging", 
      description: "The pouches are further packed in robust corrugated carton boxes (20kg) to ensure the bags are safeguarded.",
      icon: brand4
    }
  ];

  return (
    <div className="brand-section-container">
      <div className="brand-section">
        <div className="brand-header">
          <h2>Our Premium Brands</h2>
          <p className="brand-subtitle">
            Exceptional quality rice varieties for every occasion
          </p>
        </div>

        <div className="product-display">
          {brands.map((brand, index) => (
            <div className="product-card" key={index}>
              <div className="product-info">
                <h3>{brand.name} <span className="brand-type">{brand.type}</span></h3>
                <p className="product-description">{brand.description}</p>
                <ul className="product-benefits">
                  {brand.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className="check-icon"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-image">
                <img src={brand.img} alt={`${brand.name} ${brand.type}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="packaging-banner">
          <h2>Packaging That Delivers Freshness, Quality, and Convenience in Every Grain</h2>
          <div className="packaging-features">
            {packagingFeatures.map((feature, index) => (
              <div className="packaging-feature" key={index}>
                <div className="feature-icon1">
                  <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
                </div>
                <div className="feature-content1">
                  <strong>{feature.title}</strong> {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameBrands;
