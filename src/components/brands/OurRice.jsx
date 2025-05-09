import React from 'react';
import './OurRice.css';

const OurRice = () => {
  const riceItems = new Array(6).fill({
    name: "1121 STEAM RICE",
    img: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1746095659/1121-Sella-Rice_lsabbh.jpg",
  });

  return (
    <div className="rice-section">
      <h2>Rice</h2>
      <div className="rice-container">
        {riceItems.map((rice, index) => (
          <div className="rice-card" key={index} >
            <img src={rice.img} alt={rice.name} />
            <p>{rice.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRice;