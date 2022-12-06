const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Petro' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Gleb' },
    { id: 4, name: 'Nata' },
    { id: 5, name: 'Illy' },
    { id: 6, name: 'Max' },
  ],
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How is you React' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Zzz' },
  ],
  messagesOfFreands: [
    { id: 1, message: '11111Hi!' },
    { id: 2, message: '2222222How is you React' },
    { id: 3, message: '333333333Yo' },
    { id: 4, message: '44444444Zzz' },
  ],
  newMessageText: '',
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    case ADD_MESSAGE:
      let text = state.newMessageText;
      console.log('text: ', text);
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 5, message: text }],
      };
    default:
      return state;
  }
};

export const sendMessageCreater = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogReducer;
