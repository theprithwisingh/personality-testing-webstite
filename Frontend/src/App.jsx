import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
