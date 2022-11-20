import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import MessagesOfFreands from './MessagesOfFreands/MessageOfFreands';
import s from './Dialogs.module.css';

const Dialogs = ({ state, addMessage, updateNewMessageText, newMessageText }) => {
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  let messagesOfFreandsElements = state.messagesOfFreands.map((message) => {
    return (
      <MessagesOfFreands
        key={message.id}
        message={message.message}
        id={message.id}
      />
    );
  });

  const myMessage = React.createRef();

  const sendMessage = () => {
    addMessage()
  };

  const onMessageChange = () => {
    let text = myMessage.current.value;
    updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesWrapper}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.messagesF}>{messagesOfFreandsElements}</div>
        <div className={s.sendWrapper}>
          <textarea onChange={onMessageChange} className={s.myMessage} ref={myMessage} value={newMessageText}></textarea>
          <button onClick={sendMessage} className={s.btnSend}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
