
import React from "react";
import './Products.css'
import ProductItem from './ProductItem.js'



const Products = (props) => {

  const [products, setProducts] = React.useState([])

  const getData = () => {
    fetch("productlist.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.milktea)
        setProducts(data.milktea);
    });
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