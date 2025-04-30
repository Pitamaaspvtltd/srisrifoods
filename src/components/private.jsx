import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './private.css';

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="custom-arrow next-arrow" 
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="custom-arrow prev-arrow" 
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left"></i>
    </div>
  );
};

export default function PrivateLabeling() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  // Product data
  const products = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917602/TRANSPARENT_PP_gftwmi.png",
      title: "Transparent PP"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917491/Jute_BAg_nsdzic.png",
      title: "Jute Bag"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917599/MILKY_PP_flvmsd.png",
      title: "Milky PP"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917490/Non_Woven_Bag_oie1sz.png",
      title: "Non-Woven"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917604/basmati_pouch_gwtkuo.png",
      title: "Pouch"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917601/fb_lkkhjy.png",
      title: "BOPP"
    }
  ];

  return (
    <section className="private-labeling-section">
      <h2 className="private-labeling-heading">Private Labeling</h2>
      <p className="private-labeling-subheading">
        We also offer customized private labeling solutions across a wide range of packaging formats, including
        Non-Woven, Jute, Pouch, BOPP and PP materials
      </p>
      
      <div className="slider-container">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="slide-item">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image" 
              />
              <h3 className="product-title">{product.title}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className="infra">
        <div className="infratext">
            <div className="infrahead">
                <h2>Infrastructure </h2>
            </div>
        <div className="infrapara"> Our state-of-the-art processing units are equipped with advanced 
        technology to ensure precision, hygiene and consistency in every grain.</div>
        </div>
      </div>
    </section>
  );
}