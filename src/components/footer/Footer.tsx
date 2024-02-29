import React from 'react';
import { Typography, Container, makeStyles } from '@mui/material';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        Розроблено{' '}
        <a
          href="https://www.linkedin.com/in/vladyslav-zinchenko-67414a205/"
          target="_blank"
          style={{ color: '#fff' }}
        >
          Vlad Zinchenko
        </a>
      </p>

      <p>© {new Date().getFullYear()} Easy Coocking</p>
    </footer>
  );
};

export default Footer;
