import React from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = ({ trips, onAddToCart }) => {
  const { tripId } = useParams();
  const trip = trips.find(t => t.id === parseInt(tripId));

  if (!trip) {
    return <div className="text-center">Trip not found.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{trip.name}</h2>
      <p className="mb-2">{trip.description}</p>
      <p className="text-gray-600">Dates: {trip.dates}</p>
      <p className="text-green-600 font-bold">Price: ${trip.price}</p>
      <p className="text-gray-600">Available Slots: {trip.availableSlots}</p>
      <p className="text-gray-600">Cancellation Policy: {trip.cancellationPolicy}</p>
      <button 
        onClick={() => onAddToCart(trip)} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default TripDetails;