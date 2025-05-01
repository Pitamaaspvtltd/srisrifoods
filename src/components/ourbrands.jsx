import React from 'react';
import Slider from 'react-slick';
import 'aos/dist/aos.css';
import './ourbands.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';

// Custom next arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow1 custom-next" onClick={onClick}>
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
};

// Custom previous arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow1 custom-prev" onClick={onClick}>
      <i className="fa-solid fa-arrow-left"></i>
    </div>
  );
};

const RiceBrandsSlider = () => {
  const brands = [
    { id: 1, name: 'Eid Chand XXXL Classic', image: b1, alt: 'Eid Chand Basmati Rice' },
    { id: 2, name: 'Sri 1121 Basmati Rice', image: b2, alt: 'Sri Premium Basmati Rice' },
    { id: 3, name: 'Eid Chand XXXL Classic', image: b3, alt: 'Eid Chand Basmati Rice' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="rice-brands-wrapper">
      <div className="rice-brands-container">
        <h2 className="rice-section-heading" data-aos="fade-up">Our Brands</h2>

        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="rice-carousel-item" data-aos="zoom-in">
              <div className="rice-product-card">
                <img src={brand.image} alt={brand.alt} className="rice-product-image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="familban"></div>
    </div>
  );
};

export default RiceBrandsSlider;
