import './App.css';
import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Home from './customer/pages/home.js';
import LayoutDefault from './customer/pages/LayoutDefault';
import Fruittea from './customer/pages/fruittea';
import Seasonal from './customer/pages/seasonal';
import Freshtea from './customer/pages/freshtea';
import Coffee from './customer/pages/coffee';
import Special from './customer/pages/special';
import SignIn from './customer/pages/SignIn';
import AdminPage from './admin/AdminPage';
import ShoppingCart from './customer/components/shoppingCart/ShoppingCart';

function App() {
  const [cart, setCart] = React.useState([]);

  const localCart = localStorage.getItem('cart');

  const addItem = (item) => {
    const cartCopy = [...cart];
    const {id} = item;
    const existingItem = cartCopy.find(cartItem => cartItem.id === id);

    
    if (existingItem) {
      // if item already exists
      existingItem.quantity = item.quantity;
    } else {
      // if not exist, just add it
      cartCopy.push(item)
    }
    setCart(cartCopy); // update cart state with modified copy

    // store updated cart as string and update local Storage
    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)

  }
  const updateItem = (itemId, amount) => {}
  const removeItem = (itemId) => {}

  const adminPages = ["adminHome"];
  const categories = ["milktea", "fruittea", "seasonal", "freshtea", "coffee", "special"];

  React.useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart)
  }, [])

  const handleAdd = ({productName, customInfo}) => {
    const sugarLevel = customInfo[0];
    const tempLevel = customInfo[1];
    const toppings = customInfo[2];

  }

  return (
      <Routes>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/shoppingCart' element={<ShoppingCart/>} />

        {adminPages.map((adminPage) => (
          <Route path='/admin' element={<AdminPage category={adminPage}/>} />
        ))}
        {categories.map((categoryName) => (
          <Route path={`/${categoryName}`} 
                 exact element={
                    <LayoutDefault category={categoryName} 
                                   sendNewAdded={handleAdd} 
                                   numOfItemInCart={cart.length}/>
                 }/>
        ))}

      </Routes>
      
    
  );
}

export default App;
