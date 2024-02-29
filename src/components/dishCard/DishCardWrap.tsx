import React, { FC, ReactNode } from 'react';
import DishCard from './DishCard';
import './Dish.scss';

interface DishCardWrapProps {
  children: ReactNode;
}

const DishCardWrap: FC<DishCardWrapProps> = ({ children }) => {
  return <div className="dish__wrap">{children}</div>;
};

export default DishCardWrap;
