import React from 'react';
import { sendMessageCreater, updateNewMessageTextCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store }) => {

  let state = store.getState().dialogsPage

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreater());
  };

  const onMessageChange = (text) => {
    store.dispatch(updateNewMessageTextCreater(text));
  };

  return <Dialogs updateNewMessageText={onMessageChange} onSendMessage={onSendMessageClick} state={state}/>;

};

export default DialogsContainer;
