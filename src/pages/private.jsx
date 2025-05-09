import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YourBrand from '../components/privatelabelling/YourBrand';
import WhyChooseUs from '../components/privatelabelling/WhyChooseUs';
import PrivateLabeling from '../components/private';
import LaunchSection from '../components/privatelabelling/LaunchSection';
import Banner from '../common/banner';
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
      <YourBrand/>
      <WhyChooseUs />
      <PrivateLabeling />
      <LaunchSection />
    </div>
  );
}

export default About;
