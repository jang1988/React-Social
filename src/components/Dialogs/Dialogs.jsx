import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessagesOfFreands from './MessagesOfFreands/MessageOfFreands';
import s from './Dialogs.module.css';

const Dialogs = ({ state }) => {
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  let messagesOfFreandsElements = state.messagesOfFreands.map((message) => (
    <MessagesOfFreands
      key={message.id}
      message={message.message}
      id={message.id}
    />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesWrapper}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.messagesF}>{messagesOfFreandsElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
