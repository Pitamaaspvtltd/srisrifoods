import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './banner.css';

// Desktop Backgrounds
import homeDesktop1 from '../assets/01.png';

// Mobile Backgrounds
import homeMobile1 from '../assets/homemobile1.png';

function Banner() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const pageBannerConfigs = useMemo(() => ({
        '/': {
            desktopBackgrounds: [homeDesktop1],
            mobileBackgrounds: [homeMobile1],
            mobileClass: 'mobile-home'
        }
    }), []);

    const [bannerConfig, setBannerConfig] = useState({
        background: '',
        mobileClass: ''
    });

    useEffect(() => {
        const handleResize = () => {
          const mobile = window.innerWidth <= 768;
          setIsMobile(mobile);
          console.log("isMobile:", mobile);
        };
        handleResize(); // Trigger on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
    useEffect(() => {
        let matchedPath = Object.keys(pageBannerConfigs).find(path =>
            location.pathname === path
        ) || Object.keys(pageBannerConfigs).find(path =>
            location.pathname.startsWith(path)
        );

        const currentPageConfig = pageBannerConfigs[matchedPath] || pageBannerConfigs['/'];
        const background = isMobile
            ? currentPageConfig.mobileBackgrounds[0]
            : currentPageConfig.desktopBackgrounds[0];

        setBannerConfig({
            background,
            mobileClass: currentPageConfig.mobileClass
        });
    }, [location.pathname, isMobile, pageBannerConfigs]);

    return (
        <div
            className={`banner-wrapper single-image ${bannerConfig.mobileClass}`}
            style={{
                backgroundImage: `url(${bannerConfig.background})`,
                backgroundColor: '#eee',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}
        />
    );
}

export default Banner;
