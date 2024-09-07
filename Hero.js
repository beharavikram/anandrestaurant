import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <h2>Welcome to Our Restaurant</h2>
      <p>Enjoy the best dining experience with us.</p>
      <a href="#menu" className="btn">See Our Menu</a>
    </section>
  );
}

export default Hero;