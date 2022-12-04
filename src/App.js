import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = ({ store }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Profile store={store} />} />
          <Route path="/profile" element={<Profile store={store} />} />
          <Route
            path="/dialogs/*"
            element={<DialogsContainer store={store} />}
          />
          <Route path="/news" element={<DialogsContainer />} />
          <Route path="/music" element={<DialogsContainer />} />
          <Route path="/setings" element={<DialogsContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
