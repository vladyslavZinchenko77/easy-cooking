import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import './header.scss';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={'/'} className="header__logo">
          <img
            className="header__logo-img"
            src="/svg/cook-logo.svg"
            alt="logo"
          />
          <h4 className="header__logo-title">Easy Cooking</h4>
        </Link>
        <div style={{ marginLeft: 'auto' }}>
          <Link className="header__link" href={'/breakfasts'}>
            Сніданки
          </Link>
          <Link className="header__link" href={'/salads'}>
            Салати
          </Link>
          <Link className="header__link" href={'/pastas'}>
            Пасти
          </Link>
          <Link className="header__link" href={'/first-dishes'}>
            Перші страви
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
