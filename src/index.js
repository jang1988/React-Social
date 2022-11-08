import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 0 },
  { id: 2, message: "It's my first post", likesCount: 23 },
  { id: 23, message: "Second post", likesCount: 43 },

];

let dialogs = [
  { id: 1, name: 'Petro' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Gleb' },
  { id: 4, name: 'Nata' },
  { id: 5, name: 'Illy' },
  { id: 6, name: 'Max' },
];

let messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How is you React' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Zzz' },
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));
