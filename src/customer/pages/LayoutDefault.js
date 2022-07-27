
import React from 'react';
import '../../App.css';
import Navbar from '../components/navbar/Navbar.js';
import Footerbar from '../components/footer/Footerbar.js';
import Products from '../components/products/Products.js';


const LayoutDefault = (props) => {
    const category = props.category;


    return (
        <div className="container">
          <Navbar />
          <div className="container">
            
            <Products category={category} />
          </div>
        <div className="container">
          <Footerbar />
        </div>
      </div>
    );
};

export default LayoutDefault;