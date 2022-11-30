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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
    if (action.type === ADD_MESSAGE) {
      let text = this._state.dialogsPage.newMessageText
      this._state.dialogsPage.messages.push({ id: 5, message: text });
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state);
    }
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

updateNewMessageTextCreater('2222')

export default store;
// window.store = store;
