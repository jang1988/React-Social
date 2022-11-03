import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/1">Petr</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/2">Anna</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/3">Gleb</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/4">Nata</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/5">Max</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink className={({isActive}) => (isActive ? s.active : '')} to="/dialogs/6">Dima</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi!</div>
        <div className={s.dialog}>How is your React</div>
        <div className={s.dialog}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
