// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Bookmarks from './Bookmarks';
import { bookmarks } from './bookmarksData';

function App() {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(null);

  const toggleBookmarks = () => setShowBookmarks(prev => !prev);

  const handleBookmarkClick = (bm) => {
    if (bm.iframeAllowed) {
      setActiveBookmark(bm);
      setShowBookmarks(false); // Close panel on click
    } else {
      window.open(bm.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-mint-50 text-gray-900 relative">
      {/* Toggle button at top center */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 bg-mint-50">
        <button
          onClick={toggleBookmarks}
          className="bg-white/80 hover:bg-white rounded-full p-2 border border-teal-500 transition"
          title="Toggle Bookmarks"
        >
          <span className="text-2xl">{showBookmarks ? '⌃' : '⌄'}</span>
        </button>
      </div>

      {/* Overlay bookmark panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-teal-500 shadow transition-[max-height,padding] duration-300 overflow-hidden ${
          showBookmarks ? 'max-h-64 p-4' : 'max-h-0 p-0'
        }`}
      >
        <Bookmarks bookmarks={bookmarks} onSelect={handleBookmarkClick} />
      </div>

      {/* Main content underneath */}
      <main className="pt-20 p-6">
        {activeBookmark && activeBookmark.iframeAllowed ? (
          <iframe
            src={activeBookmark.url}
            title={activeBookmark.name}
            className="w-full h-[80vh] border border-teal-500 rounded"
          />
        ) : (
          <p className="text-center text-gray-500 mt-8">
            ブックマークをクリックして表示します。
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
