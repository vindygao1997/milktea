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

  let localCart = localStorage.getItem('cart');

 
  const adminPages = ["adminHome"];
  const categories = ["milktea", "fruittea", "seasonal", "freshtea", "coffee", "special"];

  // rerender the whole app to update shopping cart number if new item added
  React.useEffect(() => {
    if (localCart) setCart(JSON.parse(localCart));
  }, [localCart])



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
                    <LayoutDefault category={categoryName} />
                 }/>
        ))}

      </Routes>
      
    
  );
}

export default App;
