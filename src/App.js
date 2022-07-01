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
import Coffee from './pages/coffee';
import Special from './pages/special';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div class="container">
      <Routes>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/milktea' exact element={<Milktea />}/>
        <Route path='/fruittea' element={<Fruittea/>} />
        <Route path='/seasonal' element={<Seasonal/>} />
        <Route path='/freshtea' element={<Freshtea/>} />
        <Route path='/coffee' element={<Coffee/>} />
        <Route path='/special' element={<Special/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
