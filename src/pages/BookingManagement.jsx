import React, { useEffect, useState } from 'react';

const BookingManagement = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch('https://travel-backend-74ge.onrender.com/api/trips'); // Fetch from the correct endpoint
      const data = await response.json();
      setCartItems(data);
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (id) => {
    await fetch(`https://travel-backend-74ge.onrender.com/api/trips/${id}`, {
      method: 'DELETE',
    });
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert('Proceeding to Checkout'); // Show alert on checkout
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Booking Management</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your booking is empty.</p>
      ) : (
        <div>
          <ul className="mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name}</span>
                <span className="text-gray-600">${item.price}</span>
                <button 
                  onClick={() => handleRemove(item.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
         
          
        </div>
      )}
    </div>
  );
};

export default BookingManagement;
