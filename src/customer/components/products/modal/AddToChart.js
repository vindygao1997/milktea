import React from 'react';
import { Cart } from '../../../context/Context';

// TODO: localStorage updated after "Add to cart", but cart number in nav-bar is not updated until refreshing (which is re-rendering the whole app)

const AddToChart = ({ product, sugarInfo, tempInfo, toppingInfo }) => {


    const item = {
        name: product, 
        sugar: sugarInfo, 
        temp: tempInfo,
        topping: toppingInfo,
        quantity: 1
    };

    //////////// USE localStorage to store Cart items to keep it after refreshing page //////////
    // const [cart, setCart] = React.useState(() => {
    //     const cartContent = localStorage.getItem("cart");
    //     if (cartContent) {
    //         return JSON.parse(cartContent);
    //     } else {
    //         return [];
    //     }
    // });
    // store this item into local storage
    // const addItem = () => {

    //     const cartCopy = [...cart];
        
        
    //     const existingItem = cartCopy.find(cartItem => 
    //                                         cartItem.name === item.name && 
    //                                         cartItem.sugar === item.sugar &&
    //                                         cartItem.temp === item.temp &&
    //                                         cartItem.topping === item.topping
    //                                     );
        
    //     if (existingItem) {
    //         // if item already exists
    //         existingItem.quantity += 1;
    //     } else {
    //         // if not exist, just add it
    //         cartCopy.push(item);
    //     }
        
    
    //     //store updated cart as string and update local Storage
    //     const stringCart = JSON.stringify(cartCopy);

    //     console.log("stringified cart: " + stringCart)
        
    //     localStorage.setItem("cart", stringCart);

    //     setCart(cartCopy); // update cart state with modified copy will triggers a re-render of this componenet but not the whole app
    
    // }
    // const updateItem = (itemId, amount) => {}
    // const removeItem = (itemId) => {}

    const { cart, setCart } = React.useContext(Cart);

    const addItem = () => {
        setCart([...cart, item])
    }

    return (
        <button onClick={addItem} type="button" class="btn btn-outline-secondary">Add to Cart</button>
    )
}
export default AddToChart;