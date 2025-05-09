import './mission.css';

const MissionSection = () => {
    const missionItems = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mission-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
            </svg>
          ),
          title: "Global",
          description: "We already export our premium Basmati and non Basmati rice and other Commodities to 20+ countries and aim to add 20 new countries to our list by 2023."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mission-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
            </svg>
          ),
          title: "Quality",
          description: "Keep our core focus on commitment to the highest quality standards and gain the trust and and appreciation of our customers."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mission-icon">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor" />
            </svg>
          ),
          title: "Leadership",
          description: "Deliver value to our customers, be a profitable business and establish leadership in core markets."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mission-icon">
              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" fill="currentColor" />
            </svg>
          ),
          title: "Innovation & Research",
          description: "Continue to focus on research and innovative ways to achieve excellence in service and intelligent planning."
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mission-icon">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" />
            </svg>
          ),
          title: "Customer Experience",
          description: "Continue to offer superior customer experience by delivering safe and high quality products and value for money"
        }
      ];
  return (
    <section className="mission-section" data-aos="fade-up">
      <div className="mission-container">
        <h1 className="mission-title" data-aos="fade-up">Our Mission</h1>
        <p className="mission-subtitle" data-aos="fade-up" data-aos-delay="100">
          We are committed to bringing the finest quality food products from India to the global market,
          with a focus on customer satisfaction and sustainable business practices.
        </p>

        <div className="mission-items">
          {missionItems.map((item, index) => (
            <div
              className="mission-item"
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 100}
            >
              <div className="mission-icon-container">{item.icon}</div>
              <h3 className="mission-item-title">{item.title}</h3>
              <p className="mission-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
