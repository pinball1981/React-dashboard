// src/Bookmarks.jsx
import React, { useState } from 'react';
import bookmarks from './bookmarksData';

const Bookmarks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookmarkClick = (url) => {
    window.location.href = url;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 bg-purple-200 hover:bg-purple-300 text-black font-bold py-2 px-4 rounded"
      >
        {isOpen ? 'Close Bookmarks' : 'Open Bookmarks'}
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-teal-100 py-4 flex flex-wrap justify-center gap-4 shadow-md animate-slide-down z-10">
          {bookmarks.map((bookmark) => (
            <button
              key={bookmark.name}
              onClick={() => handleBookmarkClick(bookmark.url)}
              className="bg-white hover:bg-teal-200 text-black py-2 px-4 rounded shadow"
            >
              {bookmark.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
