import React from "react";

/**
 * SearchBar component - handles user input and search trigger
 */
export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2 mb-4 w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Correct event usage
        placeholder="Enter book title..."
        className="border p-2 rounded w-full focus:outline-blue-500"
      />
      <button
        onClick={onSearch} // Correctly use prop function
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Search
      </button>
    </div>
  );
}
