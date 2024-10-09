import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Pages/Footer/Footer'
import Step from './Components/Step/Step';
import Testimonials from './Pages/Testimonial/Testimonials'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      <Step/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

