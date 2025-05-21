import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../common/banner';

import NameBrands from '../components/brands/NameBrands';
// import OurRice from '../components/brands/OurRice';
// import OurRice from '../components/brands/ricedetail';


function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 400,
      once: false,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <Banner /> 
      
      <NameBrands />
    </div>
  );
}

export default About;
