import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactPage from '../components/contact/contactform';

function Contact() {
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
      <ContactPage />
    </div>
  );
}

export default Contact;
