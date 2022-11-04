import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = ({ name, id }) => {
  return (
    <div className={s.dialog}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : '')}
        to={"/dialogs/" + id}
      >
        {name}
      </NavLink>
    </div>
  );
};

const Message = ({message}) => {
  return (
    <div className={s.dialog}>{message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Petr" id="1" />
        <DialogItem name="Anna" id="2" />
        <DialogItem name="Gleb" id="3" />
        <DialogItem name="Nata" id="4" />
        <DialogItem name="Illy" id="5" />
        <DialogItem name="Max" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi!"/>
        <Message message="How is you React"/>
        <Message message="Yo"/>
      </div>
    </div>
  );
};

export default Dialogs;
