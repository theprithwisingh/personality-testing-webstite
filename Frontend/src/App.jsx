import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Pages/Footer/Footer'
import Card from './Components/Card/Card';
import Step from './Components/Step/Step';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Step/>
      <Step/>
      <Footer/>
    </div>
  );
}

export default App;

