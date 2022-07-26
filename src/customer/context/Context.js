import React from 'react';

export const Cart = React.createContext();

const Context = ({children}) => {

    const [cart, setCart] = React.useState([]);
    return (
        <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>
    )
}

export default Context;