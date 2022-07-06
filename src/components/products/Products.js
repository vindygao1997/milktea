
import React from "react";
import './Products.css';
import ProductItem from './ProductItem.js';
import axios from "axios";



const Products = (props) => {
  console.log(props.category)


  const [products, setProducts] = React.useState([])

  const getData = () => {
    //fetch("productlist.json")
    axios.get("/milktea")
    .then(response => console.log(response));
    // .then(response => JSON.stringify(response))
    // .then(data => {
    //     setProducts(data);
    // });
  }
  
  React.useEffect( () => getData(), [])



  return (
      <div className="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {products.map(product => (
               <ProductItem 
                            name={product.name} 
                            price={product.price} 
                            src={product.picture}/>
            ))}
          </div>
      </div>
      
  );
};

export default Products;