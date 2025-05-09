import React from 'react';
import './corevalue.css';

const CoreValuesSection = () => {
  const coreValues = [
    {
      title: "Quality Conscious",
      description: "It is not our endeavour to make profits by providing low quality food products to our customers. Good Quality has always been on our mind to deliver the best quality food items, our team is constantly doing research to provide freshness intact packaging, developing new methods of storing food items, so that the nutritional values of the same is not lost while in storage.",
      aos: "fade-right"
    },
    {
      title: "Planned Exports",
      description: "Not only quality but also we care of planning our export schedule and map them accurately to serve customers as per their requirements. We source food products from suppliers and manufacturers who are well managed so that there is no scope of any complaints from our esteemed clients in the future.",
      aos: "fade-up"
    },
    {
      title: "Right in Timely Delivery",
      description: "There is huge demand of Indian food commodities & food Products in Middle East and Other countries because of their taste buds that enjoy the delicious flavors which Indian cuisine brings in. The focus of our food supply is to ensure that the food commodities Food products and ready to eat food items are delivered to the designated destination on right time.",
      aos: "fade-left"
    }
  ];

  return (
    <section className="core-values-section" data-aos="fade-up">
      <div className="core-values-container">
        <h1 className="core-values-title" data-aos="fade-up">Our Core Values</h1>
        <p className="core-values-subtitle" data-aos="fade-up" data-aos-delay="100">
          Our business is built on strong values that ensure consistent quality and service excellence.
        </p>
        
        <div className="core-values-cards">
          {coreValues.map((value, index) => (
            <div className="core-value-card" key={index} data-aos={value.aos} data-aos-delay={index * 100}>
              <h3 className="core-value-title">{value.title}</h3>
              <p className="core-value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
