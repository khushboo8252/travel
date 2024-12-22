import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BookingManagement from './pages/BookingManagement';
import Header from './components/Header';
import Footer from './components/Footer';
import TripDetailsPage from './pages/TripDetailsPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking-management" element={<BookingManagement />} />
          <Route path="/trips/:tripId" element={<TripDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;