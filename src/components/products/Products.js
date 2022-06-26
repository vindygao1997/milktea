
import React from "react";
import ProductItem from "./ProductItem";
import {ViewContainer, Grid} from "./ProductElements";
import './Products.css'



const Products = (props) => {

  const [products, setProducts] = React.useState([])

  // const getProducts = () => {
  //     fetch ('productlist.json', 
  //     {
  //       headers : {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //     )
  //     .then(j => j.json())
  //     .then(data => setProducts(data))

  // }
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
      <ViewContainer className="view-container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {products.map(product => (
               <ProductItem 
                            name={product.name} 
                            price={product.price} 
                            src={product.picture}/>
            ))}
          </div>
      </ViewContainer>
      
  );
};

export default Products;