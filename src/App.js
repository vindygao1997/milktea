import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footerbar from './components/Footerbar.js';

import Home from './pages/home';
import Milktea from './pages/milktea';
import Fruittea from './pages/fruittea';
import Seasonal from './pages/seasonal';
import Freshtea from './pages/freshtea';
import Cafe from './pages/cafe';
import Special from './pages/special';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/milktea' element={<Milktea/>} />
        <Route path='/fruittea' element={<Fruittea/>} />
        <Route path='/seasonal' element={<Seasonal/>} />
        <Route path='/freshtea' element={<Freshtea/>} />
        <Route path='/cafe' element={<Cafe/>} />
        <Route path='/special' element={<Special/>} />
        
      </Routes>
      <Footerbar />
      
    </Router>
    </>
  );
}

export default App;
