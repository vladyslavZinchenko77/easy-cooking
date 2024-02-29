import React, { FC } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import { Rating } from '@mui/material';
import './Dish.scss';

interface DishCardProps {
  src: string;
  title: string;
  rate: number;
  dishes: number;
  time: string;
}

const DishCard: FC<DishCardProps> = ({ src, title, rate, dishes, time }) => {
  return (
    <div className="dish__card-wrap">
      <div
        className="dish__card"
        style={{
          backgroundImage: `url(${src})`,
        }}
      ></div>
      <h3 className="dish__card-title">{title}</h3>
      <div className="dish__card-desc">
        <div className="dish__card-time">
          <AccessTimeIcon style={{ paddingRight: '8px' }} /> <p>{time}</p>
        </div>
        <div className="dish__card-portions">
          <RoomServiceOutlinedIcon style={{ paddingRight: '8px' }} />{' '}
          <p>{dishes}</p>
        </div>
      </div>
      <div className="dish__card-rate">
        <p>Складність:</p>
        <Rating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />
      </div>
      {/* <div className="dish__card-rate">
        <p>Автор:</p>
        <Rating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />
      </div> */}
    </div>
  );
};

export default DishCard;
