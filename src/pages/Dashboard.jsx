// src/pages/Dashboard.jsx
import React from 'react';
import Cart from '../components/Cart';
import useCart from '../hooks/useAuth';

const Dashboard = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">User  Dashboard</h2>
      <Cart cartItems={cartItems} onRemove={removeFromCart} />
    </div>
  );
};

export default Dashboard;