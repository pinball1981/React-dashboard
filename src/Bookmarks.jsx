// src/Bookmarks.jsx
import React from 'react';

const Bookmarks = ({ bookmarks, onSelect }) => {
  return (
    <div className="bookmark-panel p-4 border-t border-teal-700 bg-white/80">
      <div className="grid grid-cols-2 gap-4">
        {bookmarks.map((bm, index) => (
          <button
            key={index}
            className="flex items-center gap-2 p-2 border border-teal-500 rounded hover:bg-mint-100 transition"
            onClick={() => onSelect(bm)}
          >
            <span className="text-xl">{bm.icon}</span>
            <span className="text-gray-800">{bm.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
