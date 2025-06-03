import { useState } from 'react';

export default function BookmarkDropdown() {
  const [open, setOpen] = useState(false);

  const bookmarks = [
    'Bookmark 1',
    'Bookmark 2',
    'Bookmark 3',
    'Bookmark 4',
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Toggle button centered at top */}
      <div className="flex justify-center p-4 fixed top-0 left-0 right-0 bg-gray-50 z-50">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Bookmarks Panel"
          className="focus:outline-none"
        >
          {/* Chevron icon: down if open, up if closed */}
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      {/* Dropdown panel */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-300 z-40 overflow-hidden transition-[max-height,padding] duration-300 ease-in-out ${
          open ? 'max-h-64 p-4' : 'max-h-0 p-0'
        }`}
      >
        <ul className="space-y-2">
          {bookmarks.map((bookmark, i) => (
            <li key={i} className="text-gray-700 hover:text-blue-600 cursor-pointer">
              {bookmark}
            </li>
          ))}
        </ul>
      </div>

      {/* Optional: main content underneath */}
      <main className="pt-16 p-4">
        <h1 className="text-xl font-semibold">Main Content</h1>
        <p className="mt-2 text-gray-600">This is just placeholder content under the toggle.</p>
      </main>
    </div>
  );
}
