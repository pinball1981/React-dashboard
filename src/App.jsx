// src/App.jsx
import React from 'react';
import Bookmarks from './Bookmarks';

const App = () => {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-start">
      <Bookmarks />
      <h1 className="text-4xl font-bold text-red-600 mt-16">
        Tailwind is working!
      </h1>
    </div>
  );
};

export default App;
