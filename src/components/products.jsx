// BasmatiRiceSection.jsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './product.css';

// Rice Card Component
function RiceCard({ rice, onEnquire }) {
  const [currentImage, setCurrentImage] = useState(rice.mainImage);
  const [currentVariant, setCurrentVariant] = useState(0); // Default to main variant
  
  const handleThumbnailHover = (thumbnailSrc, variantIndex) => {
    setCurrentImage(thumbnailSrc);
    setCurrentVariant(variantIndex + 1); // +1 because variant 0 is the main/default
  };
  
  const resetToDefaultImage = () => {
    setCurrentImage(rice.mainImage);
    setCurrentVariant(0); // Reset to default variant
  };
  
  const getCurrentName = () => {
    return rice.variants && rice.variants[currentVariant]
      ? rice.variants[currentVariant].name
      : rice.name;
  };
  
  return (
    <div className="basmati-card">
      <div className="basmati-image-container">
        <img
          src={currentImage}
          alt={getCurrentName()}
          className="basmati-main-image"
        />
      </div>

      {/* Thumbnails below the main image */}
      <div className="basmati-thumbnails-row">
        {rice.thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`basmati-thumbnail-wrapper ${currentImage === thumb ? 'basmati-thumbnail-active' : ''}`}
            onMouseEnter={() => handleThumbnailHover(thumb, index)}
            onMouseLeave={resetToDefaultImage}
          >
            <img
              src={thumb}
              alt={`${
                rice.variants && rice.variants[index + 1]
                  ? rice.variants[index + 1].name
                  : `${rice.name} thumbnail ${index + 1}`
              }`}
              className="basmati-thumbnail"
            />
          </div>
        ))}
      </div>
  
      <h3 className="basmati-title">{getCurrentName()}</h3>
  
      <button
        className="basmati-enquire-button"
        onClick={() => onEnquire({ ...rice, selectedVariant: getCurrentName() })}
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
    <div className="basmati-modal-overlay">
      <div className="basmati-modal-content">
        <button 
          onClick={onClose}
          className="basmati-close-button"
        >
          ✕
        </button>
        
        <h2 className="basmati-modal-title">
          Enquire About {rice.selectedVariant || rice.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="basmati-enquiry-form">
          <div className="basmati-form-group">
            <label className="basmati-form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="basmati-form-input"
              required
            />
          </div>
          
          <div className="basmati-form-group">
            <label className="basmati-form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="basmati-form-input"
              required
            />
          </div>
          
          <div className="basmati-form-group">
            <label className="basmati-form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="basmati-form-input"
              required
            />
          </div>
          
          <div className="basmati-form-group">
            <label className="basmati-form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="basmati-form-textarea"
              placeholder="Please include quantity and other requirements"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="basmati-submit-button"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

// Main Basmati Rice Section Component
export default function BasmatiRiceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRice, setSelectedRice] = useState(null);
  
  const handleEnquireClick = (riceType) => {
    setSelectedRice(riceType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Updated rice data with variants
  const riceTypes = [
    {
      id: 1,
      name: "1121 Basmati Rice", // Default/main name
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745903346/1121_cbg5xj.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745903346/1121cream_i9opep.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745903347/1121goldensella_fgevlf.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745903346/1121goldensteam_uaklnj.jpg"
      ],
      variants: [
        { name: "1121 Basmati Rice" }, // Main variant (index 0)
        { name: "1121 Creamy Basmati" }, // First thumbnail variant
        { name: "1121 Golden Basmati" }, // Second thumbnail variant
        { name: "1121 Golden Steam Basmati" }   // Third thumbnail variant
      ]
    },
    {
      id: 2,
      name: "1509 Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908137/1509_ceteya.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908137/1509creamysella_d4clr3.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908138/1509goldensella_puqvex.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908137/1509steam_qrqdsr.jpg"
      ],
      variants: [
        { name: "1509 Basmati Rice" },
        { name: "1509 Creamy Sella " },
        { name: "1509 Golden Sella " },
        { name: "1509 Steam Basmati " }
      ]
    },
    {
      id: 3,
      name: "1401 Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908385/1401_zv1b81.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908386/1401cream_musxhv.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908386/1401golden_rdv0jt.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908386/1401steam_nhi3xs.jpg"
      ],
      variants: [
        { name: "1401 Basmati Rice" },
        { name: "1401 Creamy Sella" },
        { name: "1401 Golden Sella" },
        { name: "1401 Golden Sella" }
      ]
    },
    {
      id: 4,
      name: "Pusa Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908572/pusa_ggbenx.png",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908572/pusacreamy_hc8e6o.png",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908572/pusagolden_ul58jx.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908572/pusasteam_mk6utw.jpg"
      ],
      variants: [
        { name: "Pusa Basmati Rice" },
        { name: "Pusa Creamy Sella" },
        { name: "Pusa Golden Sella" },
        { name: "Pusa Steam Basmati" }
      ]
    }
    ,
    {
      id: 5,
      name: "Sugandha Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandha_cqis88.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandhacream_brf9gu.png",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandha-golden_iqakxj.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908775/sugandhasteam_mx0mxl.jpg"
      ],
      variants: [
        { name: "Sugandha Basmati Rice" },
        { name: "Sugandha Creamy Sella" },
        { name: "Sugandha Golden Sella" },
        { name: "Sugandha Steam Basmati" }
      ]
    },
    {
      id: 6,
      name: "Sharbati Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745916320/SARBATI_dscjqt.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745909680/traditional_c9okt5.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745916321/sarbatigolden_uoegfr.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745916321/sarbatisteam_hg4s36.jpg"
      ],
      variants: [
        { name: "Sharbati  Basmati Rice" },
        { name: "Sharbati Creamy Sella" },
        { name: "Sharbati Golden Sella" },
        { name: "Sharbati Steam Basmati" }
      ]
    }
  ];

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} basmati-custom-arrow basmati-next-arrow`}
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
        className={`${className} basmati-custom-arrow basmati-prev-arrow`}
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
    <div className="basmati-section">
      <h1 className="basmati-section-title">Basmati Rice</h1>
      
      <div className="basmati-slider-container">
        <Slider {...sliderSettings}>
          {riceTypes.map((rice) => (
            <RiceCard 
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