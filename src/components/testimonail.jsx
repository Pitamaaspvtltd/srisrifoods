import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rahul Kumar",
      text: "The quality is outstanding — clean grains, natural aroma and no stickiness. My family loves it!",
      rating: 5,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921457/testimonial_pic_fke6zo.png" // Placeholder for demo
    },
    {
      id: 2,
      name: "Priya Singh",
      text: "Best basmati rice I've ever tried. The aroma fills the whole kitchen when cooking!",
      rating: 5,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921457/testimonial_pic_fke6zo.png"
    },
    {
      id: 3,
      name: "Amit Patel",
      text: "Excellent quality product. The long grains cook perfectly every time. Highly recommended!",
      rating: 5,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921457/testimonial_pic_fke6zo.png"
    },
    {
      id: 4,
      name: "Neha Sharma",
      text: "Authentic taste that reminds me of home. Will definitely purchase again.",
      rating: 4,
      image: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745921457/testimonial_pic_fke6zo.png"
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    customPaging: function() {
      return (
        <div className="testimonial-dot"></div>
      );
    }
  };

  // Generate stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="testimonial-star">
          {i < rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Testimonials</h2>
        
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={`${testimonial.name}`} />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;