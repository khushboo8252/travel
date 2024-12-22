// src/pages/TripDetailsPage.jsx
import React from 'react';
import TripDetails from '../components/TripDetails';
import useCart from '../hooks/useAuth';

const trips = [
  { id: 1, name: 'Beach Vacation', description: 'Enjoy a relaxing time at the beach.', dates: 'June 1 - June 10', price: 500, availableSlots: 5, cancellationPolicy: 'Full refund if cancelled 15 days prior.' },
  { id: 2, name: 'Mountain Adventure', description: 'Explore the beautiful mountains.', dates: 'July 15 - July 22', price: 700, availableSlots: 3, cancellationPolicy: '50% refund if cancelled 7 days prior.' },
  // Add more trips as needed
];

const TripDetailsPage = () => {
  const { addToCart } = useCart();

  return (
    <TripDetails trips={trips} onAddToCart={addToCart} />
  );
};

export default TripDetailsPage;