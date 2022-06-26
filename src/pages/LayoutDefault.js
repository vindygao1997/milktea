
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
import Cafe from './cafe';
import Special from './special';

const LayoutDefault = (props) => {
    return (
        <>
          <Products category={props.category}/>
          <Routes>
            <Route path='/home' exact element={<Home/>} />
            <Route path='/milktea' exact element={<Milktea/>} />
            <Route path='/fruittea' exact element={<Fruittea/>} />
            <Route path='/seasonal' exact element={<Seasonal/>} />
            <Route path='/freshtea' exact element={<Freshtea/>} />
            <Route path='/cafe' exact element={<Cafe/>} />
            <Route path='/special' exact element={<Special/>} />
          </Routes>

        </>
    );
};

export default LayoutDefault;