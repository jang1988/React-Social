import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="come text"
      /></NavLink>
    </header>
  );
};

export default Header;
