
import React from "react";
import './Products.css';
import ProductItem from './ProductItem.js';
import axios from "axios";



const Products = (props) => {
  


  const [products, setProducts] = React.useState([])

  const getData = () => {
    axios.get("/milktea")
    .then(response => response.data) // got an array of arrays containing each row of info in db
    .then(r => setProducts(r))
  }
  
  React.useEffect( () => getData(), [])



  return (
      <div className="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {console.log(products)}
            {products.map(product => (
              
               <ProductItem 
                            name={product[2]} 
                            price={product[3]} 
                            src={product[4]}/>
            ))}
          </div>
      </div>
      
  );
};

export default Products;