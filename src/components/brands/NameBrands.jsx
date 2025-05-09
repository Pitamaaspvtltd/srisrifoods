import React from 'react';
import './NameBrands.css';

import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';

const NameBrands = () => {
  const brands = [
    { name: "Eid Ka Chand", type: "XX Classic", img: b1 },
    { name: "Eid Ka Chand", type: "Long Grain", img: b2 },
    { name: "Sri Sri", type: "XX Premium", img: b3 },
  ];

  return (
    <div className="brand-section">
      <h2>Our Brand</h2>
      <div className="brand-container">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index} data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
            <img src={brand.img} alt={brand.name} />
            <div className="brand-name">
              <p>{brand.name}</p>
              <span>{brand.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameBrands;