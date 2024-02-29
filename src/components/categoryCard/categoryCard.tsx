import Link from 'next/link';
import React, { FC } from 'react';

interface CategoryCardProps {
  src: string;
  alt: string;
  title: string;
  link: string;
  className: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  src,
  alt,
  title,
  link,
  className,
}) => {
  return (
    <Link
      href={`${link}`}
      className={className}
      style={{ opacity: 0, textDecoration: 'none', color: 'black' }}
    >
      <div className="category__card-wrap">
        <div
          className="category__card"
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
        <h3 className="category__card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
