import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center">
      <h1 className="text-9xl font-extrabold text-pink-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        The page you're looking for doesn't exist or has been moved.  
        Let's get you back to where you belong.
      </p>

      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
      >
        Go Home
      </Link>

      
    </div>
  );
};

export default ErrorPage;
