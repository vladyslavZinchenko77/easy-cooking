'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

const Hero = () => {
  useEffect(() => {
    gsap.to('.hero-title', { opacity: 1, duration: 1, y: -30 });
    gsap.to('.hero-subtitle', { opacity: 1, delay: 1, duration: 1, y: -30 });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '80px 0' }}>
      <h2 className="hero-title" style={{ opacity: 0 }}>
        Easy Cooking
      </h2>
      <h5 style={{ marginTop: '20px', opacity: 0 }} className="hero-subtitle">
        Готуй нові страви та ділись своїми рецептами з іншими
      </h5>
    </div>
  );
};

export default Hero;
