import React, { useState } from 'react';
import Slider from 'react-slick';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast'; // Toaster Import
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './nosbasmati.css';

function NonbasRiceCard({ rice, onEnquire }) {
  return (
    <div className="nonbasmati-card" data-aos="zoom-in">
      <div className="nonbasmati-image-container">
        <img src={rice.mainImage} alt={rice.name} className="nonbasmati-main-image" />
      </div>
      <h3 className="nonbasmati-title">{rice.name}</h3>
      <button className="nonbasmati-enquire-button" onClick={() => onEnquire({ ...rice, selectedVariant: rice.name })}>
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
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: `I'm interested in ${rice.selectedVariant || rice.name}`
        });
        onClose();
      },
      (err) => {
        toast.error('Failed to send enquiry. Please try again later.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="nonbasmati-modal-overlay">
      <div className="nonbasmati-modal-content">
        <button onClick={onClose} className="nonbasmati-close-button">✕</button>
        <h2 className="nonbasmati-modal-title">Enquire About {rice.selectedVariant || rice.name}</h2>
        <form onSubmit={handleSubmit} className="nonbasmati-enquiry-form">
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="nonbasmati-form-input" required />
          </div>
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="nonbasmati-form-input" required />
          </div>
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="nonbasmati-form-input" required />
          </div>
          <div className="nonbasmati-form-group">
            <label className="nonbasmati-form-label">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="nonbasmati-form-textarea" />
          </div>
          <button type="submit" className="nonbasmati-submit-button" disabled={loading}>
            {loading ? (
              <span><i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }}></i>Submitting...</span>
            ) : (
              'Submit Enquiry'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}


export default function NonBasmatiRiceSection() {
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
      name: 'PR 11 Rice',
      mainImage: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1747652177/PR-11_bxraks.jpg'
    },
    {
      id: 2,
      name: 'IR-64 PARBOILED RICE',
      mainImage: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1747652176/IR-64_ym8lr4.jpg'
    },
    {
      id: 3,
      name: 'SONA MASOORI RICE',
      mainImage: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1747652176/Sona-Masoori-Rice_hobbgp.jpg'
    },
    {
      id: 4,
      name: 'JEERAKASALA RICE',
      mainImage: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1747652177/jeera-kasala_bxzqot.jpg'
    }
    ,
    {
      id: 5,
      name: 'PR 14 Rice',
      mainImage: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1747652176/PR-14_ykjr7p.jpg'
    }
  ];

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} nonbasmati-custom-arrow nonbasmati-next-arrow`} style={{ ...style }} onClick={onClick}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} nonbasmati-custom-arrow nonbasmati-prev-arrow`} style={{ ...style }} onClick={onClick}>
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
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
    <div className="nonbasmati-section" style={{ overflowX: 'hidden' }}>
      <Toaster position="top-right" /> {/* Toaster here */}
      <h2 className="nonbasmati-section-title" data-aos="fade-up">Non-Basmati Rice</h2>
      <div className="nonbasmati-slider-container">
        <Slider {...sliderSettings}>
          {riceTypes.map((rice) => (
            <NonbasRiceCard key={rice.id} rice={rice} onEnquire={handleEnquireClick} />
          ))}
        </Slider>
      </div>
      {isModalOpen && <EnquiryModal rice={selectedRice} onClose={closeModal} />}
    </div>
  );
}
