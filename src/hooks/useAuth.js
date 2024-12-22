import { useState } from 'react';


const useCart = () => {

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (trip) => {

    setCartItems(prevItems => [...prevItems, trip]);

  };


  const removeFromCart = (tripId) => {

    setCartItems(prevItems => prevItems.filter(item => item.id !== tripId));

  };


  return { cartItems, addToCart, removeFromCart };

};


export default useCart;