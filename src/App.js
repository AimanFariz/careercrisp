import React, { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState('');
  const [intensity, setIntensity] = useState('Mild');
  const [roast, setRoast] = useState('');

  const handleGenerateRoast = async () => {
    // Replace with your backend API endpoint
    const mockRoasts = {
      Mild: "You seem nice, but your job title sounds like it came from a cereal box.",
      Savage: "Oh, you're 'passionate about blockchain'? Can't wait for your TED Talk on solving world hunger with NFTs.",
      "Soul-crushing": "Your bio screams 'LinkedIn influencer,' but we all know you're just here for the free coffee."
    };
    setRoast(mockRoasts[intensity]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Roastify.me 🔥</h1>
      <p className="text-gray-600 mb-4">Enter your professional bio, and we’ll give you a lighthearted roast!</p>

      <textarea
        className="w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        rows="5"
        placeholder="Enter your bio (e.g., 'Aspiring entrepreneur passionate about blockchain.')"
        value={userData}
        onChange={(e) => setUserData(e.target.value)}
      ></textarea>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Roast Intensity:</label>
        <select
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="Mild">Mild</option>
          <option value="Savage">Savage</option>
          <option value="Soul-crushing">Soul-crushing</option>
        </select>
      </div>

      <button
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        onClick={handleGenerateRoast}
      >
        Generate Roast 🔥
      </button>

      {roast && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md max-w-lg text-center">
          <h2 className="text-xl font-bold text-gray-800">Your Roast:</h2>
          <p className="text-gray-600 mt-2">{roast}</p>
        </div>
      )}
    </div>
  );
};

export default App;
