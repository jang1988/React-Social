import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const setActiveColor = (navData) => (navData.isActive ? s.activeLink : s.item);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink style={({isActive}) => ({marginLeft: isActive ? '20px' : ''})} className={setActiveColor} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink style={({isActive}) => ({marginLeft: isActive ? '20px' : ''})} className={setActiveColor} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink style={({isActive}) => ({marginLeft: isActive ? '20px' : ''})} className={setActiveColor} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink style={({isActive}) => ({marginLeft: isActive ? '20px' : ''})} className={setActiveColor} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink style={({isActive}) => ({marginLeft: isActive ? '20px' : ''})} className={setActiveColor} to="/setings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
