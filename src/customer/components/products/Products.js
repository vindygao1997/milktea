
import React from "react";
import './Products.css';
import ProductItem from './ProductItem.js';
import axios from "axios";



const Products = (props) => {
  

  const category = props.category;
  const [products, setProducts] = React.useState([])
  const [added, setAdded] = React.useState([]);

  function getData() {
    axios.get(`/${category}`)
    .then(response => response.data) // got an array of arrays containing each row of info in db
    .then(r => setProducts(r))
  }

  
  // React.useEffect( () => {
  //   return () => {
  //     axios.get(`/${category}`)
  //     .then(response => response.data) // got an array of arrays containing each row of info in db
  //     .then(r => setProducts(r))
  //   }
  // }, )


  React.useEffect( () => {
    props.sendNewAddedItem(added);
    console.log("added is updated to: "+added)
  }, [added])



  return (
      <div className="container">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {getData()}
            {/* {console.log(products)} */}
            {products.map(product => (
              
               <ProductItem 
                            name={product[2]} 
                            price={product[3]} 
                            src={product[4]}
                            sendtoParent={setAdded}/>
            ))}
          </div>
      </div>
      
  );
};

export default Products;