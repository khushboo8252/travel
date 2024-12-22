import React from 'react';

const TripCard = ({ trip, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-lg">
      <h2 className="text-lg font-bold">{trip.name}</h2>
      <p>{trip.description}</p>
      <p className="text-gray-600">Dates: {trip.dates}</p>
      <p className="text-green-600">Price: ${trip.price}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add to cart
      </button>
    </div>
  );
};

export default TripCard;