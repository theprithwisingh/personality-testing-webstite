import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Pages/Footer/Footer'
import Card from './Components/Card/Card';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
