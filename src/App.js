import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = ({
  state,
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
}) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={
              <Profile
                profilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                state={state.dialogsPage}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
                newMessageText={state.dialogsPage.newMessageText}
              />
            }
          />
          <Route path="/news" element={<Dialogs />} />
          <Route path="/music" element={<Dialogs />} />
          <Route path="/setings" element={<Dialogs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
