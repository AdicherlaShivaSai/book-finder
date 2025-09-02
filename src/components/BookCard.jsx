import React from "react";

/**
 * BookCard component - displays a single book's info
 * Handles missing authors or cover images safely
 */
export default function BookCard({ book }) {
  const title = book.title || "No Title"; // Fallback title
  const authors = book.author_name ? book.author_name.join(", ") : "Unknown Author";

  // Construct cover image URL or fallback to placeholder
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/128x192?text=No+Cover";

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transform hover:scale-105 transition p-4 flex flex-col items-center bg-white">
      <img 
        src={coverUrl} 
        alt={title} 
        className="w-32 h-48 object-cover mb-4 rounded" 
      />
      <h2 className="text-lg font-semibold text-center mb-1">{title}</h2>
      <p className="text-sm text-gray-600 text-center">{authors}</p>

      {/* Link to Open Library book page */}
      <a 
        href={`https://openlibrary.org${book.key}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition"
      >
        More Info
      </a>
    </div>
  );
}
