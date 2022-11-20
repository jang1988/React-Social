import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 0 },
      { id: 2, message: "It's my first post", likesCount: 23 },
      { id: 3, message: 'Second post', likesCount: 43 },
    ],
    newPostText: 'NEW POST...',
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
    newMessageText: 'NEW MESSAGE',
  },
};

export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 22,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage
  rerenderEntireTree(state);
}

export default state;
