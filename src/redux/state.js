import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: "It's my first post", likesCount: 23 },
        { id: 3, message: 'Second post', likesCount: 43 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log('START');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state);   
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreater = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextCreater = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default store;
// window.store = store;
