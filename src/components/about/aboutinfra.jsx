import React from 'react';
import './aboutinfra.css';

const ManufacturingFacilities = () => {
  const facilityImages = [
    {
      id: 'facility1',
      className: 'facility-image-large-left',
      alt: 'Rice processing facility with industrial equipment',
      src: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746774405/IMG_9359_2_ygd7xk.jpg',
      aos: 'fade-right'
    },
    {
      id: 'facility2',
      className: 'facility-image-small-right',
      alt: 'Food grain storage and processing unit',
      src: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746772647/IMG_9371_1_o2p7o0.jpg',
      aos: 'fade-left'
    },
    {
      id: 'facility3',
      className: 'facility-image-full-width',
      alt: 'Interior of food processing factory with machinery',
      src: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746774405/IMG_9369_pkwnop.jpg',
      aos: 'zoom-in-up'
    },
    {
      id: 'facility4',
      className: 'facility-image-small-left',
      alt: 'Rice packaging facility with product storage',
      src: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746774405/IMG_9366_1_ndw3c0.jpg',
      aos: 'fade-up-right'
    },
    {
      id: 'facility5',
      className: 'facility-image-small-right',
      alt: 'Food grain processing machinery and bagging area',
      src: 'https://res.cloudinary.com/dwfn4hylt/image/upload/v1746774405/IMG_9367_1_hzum4e.jpg',
      aos: 'fade-up-left'
    }
  ];

  return (
    <section className="manufacturing-section" data-aos="fade-up">
      <div className="manufacturing-container">
        <h1 className="manufacturing-title" data-aos="fade-up">Manufacturing Facilities</h1>
        
        <p className="manufacturing-description" data-aos="fade-up" data-aos-delay="100">
          We are a group of young and enthusiastic individuals who have come together for a single goal of being a global leader 
          in food trading. We believe that India is known for our Basmati Rice, Non-Basmati, other food commodities spices and 
          Food Products export is key to our country's growth. Prioritizing importing Indian Basmati & Non-Basmati, we are also 
          analysts and researchers who possess an up to date global food market database to help you.
        </p>
        
        <div className="facility-gallery">
          <div className="gallery-row top-row">
            <div className={`placeholder-image ${facilityImages[0].className}`} data-aos={facilityImages[0].aos}>
              <img src={facilityImages[0].src} alt={facilityImages[0].alt} />
            </div>
            <div className={`placeholder-image ${facilityImages[1].className}`} data-aos={facilityImages[1].aos}>
              <img src={facilityImages[1].src} alt={facilityImages[1].alt} />
            </div>
          </div>
          
          <div className="gallery-row middle-row">
            <div className={`placeholder-image ${facilityImages[2].className}`} data-aos={facilityImages[2].aos}>
              <img src={facilityImages[2].src} alt={facilityImages[2].alt} />
            </div>
          </div>
          
          <div className="gallery-row bottom-row">
            <div className={`placeholder-image ${facilityImages[3].className}`} data-aos={facilityImages[3].aos}>
              <img src={facilityImages[3].src} alt={facilityImages[3].alt} />
            </div>
            <div className={`placeholder-image ${facilityImages[4].className}`} data-aos={facilityImages[4].aos}>
              <img src={facilityImages[4].src} alt={facilityImages[4].alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingFacilities;
