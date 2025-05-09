import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PremiumFoodExport from '../components/about/ournumbers';
import Banner from '../common/banner';// ✅ Import Banner component
import WhoWeAreSection from '../components/about/whoweare';


import MissionSection from '../components/about/mission';
import CoreValuesSection from '../components/about/corevalue';
import ManufacturingFacilities from '../components/about/aboutinfra';
import WhatWeDo from '../components/about/ourmission';
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
      <Banner /> {/* ✅ Add Banner at the top */}
      <PremiumFoodExport />
      <WhoWeAreSection />
      <WhatWeDo />
      <MissionSection />
      
      <CoreValuesSection />
      <ManufacturingFacilities />
    </div>
  );
}

export default About;
