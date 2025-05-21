
  // Updated rice data with variants


  import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css';

function RiceCard({ rice, onEnquire }) {
  const [currentImage, setCurrentImage] = useState(rice.mainImage);
  const [currentVariant, setCurrentVariant] = useState(0);

  const handleThumbnailHover = (thumbnailSrc, variantIndex) => {
    setCurrentImage(thumbnailSrc);
    setCurrentVariant(variantIndex + 1);
  };

  const resetToDefaultImage = () => {
    setCurrentImage(rice.mainImage);
    setCurrentVariant(0);
  };

  const getCurrentName = () => {
    return rice.variants && rice.variants[currentVariant]
      ? rice.variants[currentVariant].name
      : rice.name;
  };

  return (
    <div className="basmati-card" data-aos="zoom-in">
      <div className="basmati-image-container">
        <img src={currentImage} alt={getCurrentName()} className="basmati-main-image" />
      </div>
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
              alt={
                rice.variants && rice.variants[index + 1]
                  ? rice.variants[index + 1].name
                  : `${rice.name} thumbnail ${index + 1}`
              }
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

function EnquiryModal({ rice, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${rice.selectedVariant || rice.name}`
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };
  
    emailjs.send(
      'service_slzig6k',
      'template_y0krn4j',
      templateParams,
      'uE0CuWJsh78hqnywh'
    ).then(
      (response) => {
        toast.success('Enquiry submitted successfully!');
        setLoading(false);
        onClose();
      },
      (err) => {
        toast.error('Failed to send enquiry. Please try again later.');
        setLoading(false);
      }
    );
  };
  
  return (
    <div className="basmati-modal-overlay" data-aos="fade-in">
      <div className="basmati-modal-content">
        <button onClick={onClose} className="basmati-close-button">✕</button>
        <h2 className="basmati-modal-title">Enquire About {rice.selectedVariant || rice.name}</h2>
        <form onSubmit={handleSubmit} className="basmati-enquiry-form">
          <div className="basmati-form-group">
            <label className="basmati-form-label">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="basmati-form-input" required />
          </div>
          <div className="basmati-form-group">
            <label className="basmati-form-label">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="basmati-form-input" required />
          </div>
          <div className="basmati-form-group">
            <label className="basmati-form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="basmati-form-input" required />
          </div>
          <div className="basmati-form-group">
            <label className="basmati-form-label">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="basmati-form-textarea" />
          </div>
          <button type="submit" className="basmati-submit-button" disabled={loading}>
          {loading ? <><i className="fa fa-spinner fa-spin"></i> Submitting...</> : 'Submit Enquiry'}

</button>

        </form>
      </div>
    </div>
  );
}

export default function BasmatiRiceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRice, setSelectedRice] = useState(null);

  const handleEnquireClick = (riceType) => {
    setSelectedRice(riceType);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const riceTypes = [
    {
      id: 1,
      name: "1121 Basmati Rice", // Default/main name
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629689/1121-Raw-Rice_hy5jfa.jpg",
      thumbnails: [
"https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629688/1121-Sella-Rice_kscsx3.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629695/1121-Golden-Sella_tp7mog.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1509-Sella-Rice_gxgmlr.jpg"
      ],
      variants: [
        { name: "1121 Basmati Rice" }, // Main variant (index 0)
        { name: "1121 Creamy Basmati" }, // First thumbnail variant
        { name: "1121 Golden Basmati" }, // Second thumbnail variant
        { name: "1121  Sella Basmati" }   // Third thumbnail variant
      ]
    },
    {
      id: 2,
      name: "1509 Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1509-Raw-Rice_aick8u.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1509-Sella-Rice_gxgmlr.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629690/1509-Golden-Sella_t1hg5h.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1401-Sella-Rice_qecerl.jpg"
      ],
      variants: [
        { name: "1509 Basmati Rice" },
        { name: "1509 Raw  " },
        { name: "1509 Golden Sella " },
        { name: "1509 Steam Basmati " }
      ]
    },
    {
      id: 3,
      name: "1401 Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1401-Sella-Rice_qecerl.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629690/1401-Raw_fh7cil.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629693/1121-Steam-Rice_ou1fph.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629695/1401-Golden-Sella_mxhfnw.jpg"
      ],
      variants: [
        { name: "1401 Basmati Rice" },
        { name: "1401 Creamy Sella" },
        { name: "1401 Steam  Rice" },
        { name: "1401 Golden Sella" }
      ]
    },
    {
      id: 4,
      name: "Pusa Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629693/Pusa-Raw-Rice_kjwvxs.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629693/Pusa-Sella-Rice_xv8rjo.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629692/Pusa-Golden-Sella_fqwkye.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629697/Pusa-Steam-Rice_m9ybeb.jpg"
      ],
      variants: [
        { name: "Pusa Basmati Rice" },
        { name: "Pusa  Sella" },
        { name: "Pusa Golden Sella" },
        { name: "Pusa Steam Basmati" }
      ]
    },
    // ,
    // {
    //   id: 5,
    //   name: "Sugandha Basmati Rice",
    //   mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandha_cqis88.jpg",
    //   thumbnails: [
    //     "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandhacream_brf9gu.png",
    //     "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908774/sugandha-golden_iqakxj.jpg",
    //     "https://res.cloudinary.com/dwfn4hylt/image/upload/v1745908775/sugandhasteam_mx0mxl.jpg"
    //   ],
    //   variants: [
    //     { name: "Sugandha Basmati Rice" },
    //     { name: "Sugandha Creamy Sella" },
    //     { name: "Sugandha Golden Sella" },
    //     { name: "Sugandha Steam Basmati" }
    //   ]
    // },
    {
      id: 5,
      name: "Sharbati Basmati Rice",
      mainImage: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629694/Sharbati-Raw_hdqtro.jpg",
      thumbnails: [
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629691/1509-Sella-Rice_gxgmlr.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629692/Pusa-Golden-Sella_fqwkye.jpg",
        "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747629694/Sharbati-Steam_k2yqh0.jpg"
      ],
      variants: [
        { name: "Sharbati  Basmati Rice" },
        { name: "Sharbati Creamy Sella" },
        { name: "Sharbati Golden Sella" },
        { name: "Sharbati Steam Basmati" }
      ]
    }
  ];

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} basmati-custom-arrow basmati-next-arrow`} style={{ ...style }} onClick={onClick}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} basmati-custom-arrow basmati-prev-arrow`} style={{ ...style }} onClick={onClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    );
  };

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
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="basmati-section" style={{ overflowX: 'hidden' }}>
      <Toaster position="top-right" />
      <h1 className="basmati-section-title" data-aos="fade-up">Basmati Rice</h1>
      <div className="basmati-slider-container">
        <Slider {...sliderSettings}>
          {riceTypes.map((rice, index) => (
            <div key={rice.id} data-aos="zoom-in" data-aos-delay={index * 100}>
              <RiceCard rice={rice} onEnquire={handleEnquireClick} />
            </div>
          ))}
        </Slider>
      </div>
      {isModalOpen && <EnquiryModal rice={selectedRice} onClose={closeModal} />}
    </div>
  );
}
