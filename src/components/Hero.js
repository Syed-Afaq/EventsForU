import React, { useState, useEffect } from 'react';

const images = [
  "/Concert.jpg",
  "/Olympiad.jpg",
  "/Welcome.jpg"
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section position-relative d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: '100vh',
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* Black transparent overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>

      {/* Hero content */}
      <div className="position-relative z-1">
        <h1 className="display-4 fw-bold">Discover Events Near You</h1>
        <p className="lead">Find and register for exciting upcoming events.</p>
      </div>
    </section>
  );
}

export default Hero;
