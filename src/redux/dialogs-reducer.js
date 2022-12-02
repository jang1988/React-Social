const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    case ADD_MESSAGE:
      let text = state.newMessageText;
      state.messages.push({ id: 5, message: text });
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
};

export default dialogReducer;
