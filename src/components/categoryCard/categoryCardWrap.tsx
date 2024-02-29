'use client';
import React, { useEffect } from 'react';
import CategoryCard from './categoryCard';
import { gsap } from 'gsap';
import './style.scss';

const CategoryCardWrap = () => {
  useEffect(() => {
    gsap.to('.breakfast', { opacity: 1, delay: 2 });
    gsap.to('.salad', { opacity: 1, delay: 2.5 });
    gsap.to('.pasta', { opacity: 1, delay: 3 });
    gsap.to('.borsch', { opacity: 1, delay: 3.5 });
  }, []);
  return (
    <div className="category__wrap">
      <CategoryCard
        className="breakfast"
        src={'/brackfast.jpg'}
        alt="brackfasts"
        title="Сніданки"
        link="/breakfasts"
      />
      <CategoryCard
        className="salad"
        src={'/salad.jpg'}
        alt="salads"
        title="Салати"
        link="/salads"
      />
      <CategoryCard
        className="pasta"
        src={'/pasta.jpg'}
        alt="pasta"
        title="Пасти"
        link="/pastas"
      />
      <CategoryCard
        className="borsch"
        src={'/borsch.webp'}
        alt="borsch"
        title="Перші страви"
        link="/first-dishes"
      />
    </div>
  );
};

export default CategoryCardWrap;
