import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '../common/banner';
import WelcomeSection from '../components/welcome';
import RiceBrandsSlider from '../components/ourbrands';
import BasmatiRiceSection from '../components/products';
import NonBasmatiRiceSection from '../components/nonbasmati';
import PrivateLabeling from '../components/private';
import WhyChooseUs from '../components/chooseus';
import Testimonials from '../components/testimonail';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 });   
    }, []);

    return (
        <div>
            <Banner />
            <WelcomeSection />
            <RiceBrandsSlider />
          <BasmatiRiceSection />
          <NonBasmatiRiceSection />
          <PrivateLabeling />
          <WhyChooseUs />
          <Testimonials />
        </div>
    );
}

export default Home;
