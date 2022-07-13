import './App.css';
import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './customer/pages/home.js';
import Milktea from './customer/pages/milktea';
import Fruittea from './customer/pages/fruittea';
import Seasonal from './customer/pages/seasonal';
import Freshtea from './customer/pages/freshtea';
import Coffee from './customer/pages/coffee';
import Special from './customer/pages/special';
import SignIn from './customer/pages/SignIn';
import AdminPage from './admin/AdminPage';

function App() {
  return (
      <Routes>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/milktea' exact element={<Milktea />}/>
        <Route path='/fruittea' element={<Fruittea/>} />
        <Route path='/seasonal' element={<Seasonal/>} />
        <Route path='/freshtea' element={<Freshtea/>} />
        <Route path='/coffee' element={<Coffee/>} />
        <Route path='/special' element={<Special/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/admin' element={<AdminPage/>} />
      </Routes>
      
    
  );
}

export default App;
