// About.js
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to our Real Estate Application! Our mission is to help you
          find the home of your dreams. We are committed to providing top-notch
          real estate services by connecting you with the best properties and
          agents in the market.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're buying, selling, or renting, we are here to guide you
          through every step of the process. We value transparency, integrity,
          and professionalism in all our dealings.
        </p>
      </div>
    </div>
  );
};

export default About;
