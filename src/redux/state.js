let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 0 },
      { id: 2, message: "It's my first post", likesCount: 23 },
      { id: 23, message: 'Second post', likesCount: 43 },
    ],
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
  },
};

export default state;
