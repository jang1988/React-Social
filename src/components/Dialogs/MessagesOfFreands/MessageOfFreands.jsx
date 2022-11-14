import React from 'react';
import s from '../Dialogs.module.css';

const MessageOfFreands = ({ message }) => {
  return (
    <div className={s.messageInner}>
      <div className={s.messageF}>{message}</div>
      <img alt='www' src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" />
    </div>
  );
};

export default MessageOfFreands;
