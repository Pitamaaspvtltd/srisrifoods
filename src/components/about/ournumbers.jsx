import { useState, useEffect, useRef } from 'react';
import './ournumbers.css';

const CounterItem = ({ number, text, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrameId;
    const endValue = parseInt(number, 10);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * endValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, number, duration]);

  return (
    <div ref={counterRef} className="counter-item">
      <h2 className="counter-number">{count}+</h2>
      <p className="counter-text">{text}</p>
    </div>
  );
};

export default function PremiumFoodExport() {
  return (
<div className="premium-food-container">
  <div className="content-wrapper">
    <div className="header-section">
      <h2 className="main-title">Premium Food Export Since 1987</h2>
      <p className="subtitle">
        Sri Sri Foods is a leading exporter of premium quality Basmati Rice, Non-Basmati Rice
        and Indian food commodities to global markets.
      </p>
    </div>

    <div className="counters-section">
      <div className="counter-box">
        <CounterItem number="20" text="Years of Excellence" />
      </div>
      <div className="counter-box">
        <CounterItem number="50" text="Countries Served" />
      </div>
      <div className="counter-box">
        <CounterItem number="1000" text="Shipments Annually" />
      </div>
    </div>
  </div>
</div>

  );
}
