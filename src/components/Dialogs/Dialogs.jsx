import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = ({ name, id }) => {
  return (
    <div className={s.dialog}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : '')}
        to={'/dialogs/' + id}
      >
        {name}
      </NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={s.dialog}>{message}</div>;
};

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: 'Petro' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Gleb' },
    { id: 4, name: 'Nata' },
    { id: 5, name: 'Illy' },
    { id: 6, name: 'Max' },
  ];

  let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How is you React' },
    { id: 3, message: 'Yo' },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
