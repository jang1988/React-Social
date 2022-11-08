import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = ({dialogs, messages, posts}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile posts={posts} />} />
            <Route path="/profile" element={<Profile posts={posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route path="/news" element={<Dialogs />} />
            <Route path="/music" element={<Dialogs />} />
            <Route path="/setings" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
