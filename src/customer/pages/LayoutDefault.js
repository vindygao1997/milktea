
import React from 'react';
import '../../App.css';
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
    const category = props.category;
    // const numOfItemsInCart = props.numOfItemsInCart;
    // const [newAdded, setNewAdded] = React.useState([]);

    // React.useEffect( () => {
    //   newAdded.length !== 0 && props.sendNewAdded(newAdded);
    // }, [newAdded])

    return (
        <div class="container">
          <Navbar />
          <div class="container">
            
            <Products category={category} />
          </div>
        <div class="container">
          <Footerbar />
        </div>
      </div>
    );
};

export default LayoutDefault;