import { useEffect, useRef, useState } from "react";
import "./eventmedia.css";

export default function InfiniteScrollingMasonry() {
  const scrollContainerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725360/WhatsApp_Image_2025-05-20_at_12.40.26_PM_l45z9j.jpg",
      alt: "Image 1",
      width: 450,
      height: 450,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725361/WhatsApp_Image_2025-05-20_at_12.40.37_PM_wkkbjc.jpg",
      alt: "Image 2",
      width: 450,
      height: 600,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725359/WhatsApp_Image_2025-05-20_at_12.40.31_PM_o4wakk.jpg",
      alt: "Image 3",
      width: 350,
      height: 550,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725360/WhatsApp_Image_2025-05-20_at_12.40.43_PM_uhkp8g.jpg",
      alt: "Image 4",
      width: 450,
      height: 300, 
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725359/WhatsApp_Image_2025-05-20_at_12.40.33_PM_qkx4q4.jpg",
      alt: "Image 5",
      width: 400,
      height: 250,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725359/WhatsApp_Image_2025-05-20_at_12.40.28_PM_cm21te.jpg",
      alt: "Image 6",
      width: 400,
      height: 300,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725359/WhatsApp_Image_2025-05-20_at_12.40.40_PM_hadodx.jpg",
      alt: "Image 7",
      width: 200,
      height: 300,
      event: "Indus Food 2025",
    },
    {
      src: "https://res.cloudinary.com/dwfn4hylt/image/upload/v1747725359/WhatsApp_Image_2025-05-20_at_12.40.46_PM_s3ltgk.jpg",
      alt: "Image 8",
      width: 400,
      height: 250,
      event: "Indus Food 2025",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;
    const resetPoint = scrollWidth - visibleWidth - 100;

    let currentScroll = scrollPositionRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!isHovering) {
        currentScroll += 1.5;
        if (currentScroll >= resetPoint) {
          currentScroll = 10;
        }
        container.scrollLeft = currentScroll;
        scrollPositionRef.current = currentScroll;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <div className="masonry-container">
      <h2 className="masonry-heading">Our Media</h2>

      <div
        ref={scrollContainerRef}
        className="masonry-scroll-container"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="masonry-grid">
          {images.map((item, index) => (
            <div
              key={index}
              className="masonry-image-container"
              // Removed onClick handler that opened modal
              style={{ breakInside: "avoid" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="masonry-image"
                loading="lazy"
              />
              <div className="masonry-image-caption">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
