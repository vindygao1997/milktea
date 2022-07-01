
import React from 'react';
import '../App.css';
import Navbar from '../components/navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footerbar from '../components/footer/Footerbar.js';
import Products from '../components/products/Products.js';

import Home from './home';
import Milktea from './milktea';
import Fruittea from './fruittea';
import Seasonal from './seasonal';
import Freshtea from './freshtea';
import Coffee from './coffee';
import Special from './special';

const LayoutDefault = (props) => {
    return (
        <div class="container">
          <Navbar />
          <div class="container">
            
            <Products category={props.category}/>
          </div>
          <Routes>
            <Route path='/home' exact element={<Home/>} />
            <Route path='/milktea' exact element={<Milktea/>} />
            <Route path='/fruittea' exact element={<Fruittea/>} />
            <Route path='/seasonal' exact element={<Seasonal/>} />
            <Route path='/freshtea' exact element={<Freshtea/>} />
            <Route path='/cafe' exact element={<Coffee/>} />
            <Route path='/special' exact element={<Special/>} />
          </Routes>
        <div class="container">
          <Footerbar />
        </div>
      </div>
    );
};

export default LayoutDefault;