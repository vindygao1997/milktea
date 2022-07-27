
import React from "react";
import './Products.css';
import ProductItem from './ProductItem.js';
import axios from "axios";



const Products = (props) => {
  

  const category = props.category;
  const [products, setProducts] = React.useState([])


  React.useEffect(() => {
    axios.get(`/${category}`)
    .then(response => response.data) // got an array of arrays containing each row of info in db
    .then(r => setProducts(r))
  }, [category])



  return (
      <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {products.map(product => (
              
               <ProductItem 
                            name={product[2]} 
                            price={product[3]} 
                            src={product[4]}
                            />
            ))}
          </div>
      </div>
      
  );
};

export default Products;