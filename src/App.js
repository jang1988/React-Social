import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = ({ state, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={
              <Profile profilePage={state.profilePage} dispatch={dispatch} />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile profilePage={state.profilePage} dispatch={dispatch} />
            }
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />}
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
