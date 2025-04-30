// NonBasmatiRiceSection.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './nosbasmati.css';

// Rice Card Component
function NonbasRiceCard({ rice, onEnquire }) {
    return (
      <div className="nonbasmati-card">
        <div className="nonbasmati-image-container">
          <img
            src={rice.mainImage}
            alt={rice.name}
            className="nonbasmati-main-image"
          />
        </div>
  
        <h3 className="nonbasmati-title">{rice.name}</h3>
  
        <button
          className="nonbasmati-enquire-button"
          onClick={() => onEnquire({ ...rice, selectedVariant: rice.name })}
        >
          ENQUIRE NOW
        </button>
      </div>
    );
  }
  

// Enquiry Modal Component
function EnquiryModal({ rice, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${rice.selectedVariant || rice.name}` // Pre-populate with selected variant
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully!");
    onClose();
  };
  
  return (
    <div className="nonbasmati-modal-overlay">
      <div className="nonbasmati-modal-content">
        <button 
          onClick={onClose}
          className="nonbasmati-close-button"
        >
          ✕
        </button>
        
        <h2 className="nonbasmati-modal-title">
          Enquire About {rice.selectedVariant || rice.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="nonbasmati-enquiry-form">
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="nonbasmati-form-input"
              required
            />
          </div>
          
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="nonbasmati-form-input"
              required
            />
          </div>
          
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="nonbasmati-form-input"
              required
            />
          </div>
          
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="nonbasmati-form-textarea"
              placeholder="Please include quantity and other requirements"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="nonbasmati-submit-button"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

// Main Non-Basmati Rice Section Component
export default function NonBasmatiRiceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRice, setSelectedRice] = useState(null);
  
  const handleEnquireClick = (riceType) => {
    setSelectedRice(riceType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Non-basmati rice data with variants
  const riceTypes = [
    {
      id: 1,
      name: "PR 11/14 RICE", // Default/main name
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917144/pr11_ivvawa.jpg",
     
    },
    {
      id: 2,
      name: "IR-64 PARBOILED RICE",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917176/IR64_w8erum.jpg",
    },
    {
      id: 3,
      name: " SONA MASOORI RICE",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917262/sona_cyegzv.png",
     
    },
    {
      id: 4,
      name: "JEERAKASALA RICE",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745917260/jeerakala_fc2hcs.jpg",
     
    }
  ];

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nonbasmati-custom-arrow nonbasmati-next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} nonbasmati-custom-arrow nonbasmati-prev-arrow`}
        style={{ ...style }}
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="nonbasmati-section">
      <h1 className="nonbasmati-section-title">Non-Basmati  Rice</h1>
      
      <div className="nonbasmati-slider-container">
        <Slider {...sliderSettings}>
          {riceTypes.map((rice) => (
            <NonbasRiceCard 
              key={rice.id}
              rice={rice}
              onEnquire={handleEnquireClick}
            />
          ))}
        </Slider>
      </div>
      
      {/* Enquiry Modal */}
      {isModalOpen && (
        <EnquiryModal 
          rice={selectedRice} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}