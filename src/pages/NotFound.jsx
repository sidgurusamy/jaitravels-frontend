import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="px-3 py-12 flex flex-col justify-center items-center text-center px-6 font-poppins bg-gray-50">
      <h2 className="text-4xl font-playfair md:text-5xl font-bold mb-8">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
        We can't seem to find the page you're looking for.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-primary hover:bg-white hover:text-primary border border-primary transition-colors duration-300 px-6 py-3 text-white font-semibold"
      >
        GO TO HOME PAGE
      </button>
    </div>
  );
}

export default NotFound;


