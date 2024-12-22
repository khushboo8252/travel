import React, { useEffect, useState } from 'react';
import TripCard from '../components/TripCard';
import  useCart  from '../hooks/useAuth'; // Ensure this is the correct import

const LandingPage = () => {
  const { addToCart } = useCart();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('https://travel-backend-74ge.onrender.com/api/trips');
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const data = await response.json();
        setTrips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading trips...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const handleAddToCart = (trip) => {
    addToCart(trip);
    alert(`${trip.name} has been added to your cart!`); // Show alert when added
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Trips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} onAddToCart={() => handleAddToCart(trip)} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;