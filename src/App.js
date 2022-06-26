import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Footerbar from './components/footer/Footerbar.js';
import Products from './components/products/Products.js';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home.js';
import Milktea from './pages/milktea';
import Fruittea from './pages/fruittea';
import Seasonal from './pages/seasonal';
import Freshtea from './pages/freshtea';
import Cafe from './pages/cafe';
import Special from './pages/special';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/milktea' exact element={<Milktea />}/>
        <Route path='/fruittea' element={<Fruittea/>} />
        <Route path='/seasonal' element={<Seasonal/>} />
        <Route path='/freshtea' element={<Freshtea/>} />
        <Route path='/cafe' element={<Cafe/>} />
        <Route path='/special' element={<Special/>} />
      </Routes>
      <Products />
      <Footerbar />
      
      
    </>
  );
}

export default App;
