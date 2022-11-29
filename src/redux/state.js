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
  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 22,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
