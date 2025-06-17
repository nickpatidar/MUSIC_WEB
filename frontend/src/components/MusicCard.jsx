// src/components/MusicCard.jsx
import React from 'react';

const MusicCard = ({ title, artist }) => (
  <div className="bg-zinc-900 rounded-xl p-4 shadow-md hover:scale-105 transition-transform duration-300">
    <img
      src="https://via.placeholder.com/200"
      alt={title}
      className="w-full rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{artist}</p>
  </div>
);

export default MusicCard;
