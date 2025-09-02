import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import { fetchBooks } from "./api/books";

/**
 * Main App component
 */
export default function App() {
  // State
  const [query, setQuery] = useState("");           // User search input
  const [books, setBooks] = useState([]);           // Search results
  const [loading, setLoading] = useState(false);    // Loading indicator
  const [searched, setSearched] = useState(false);  // Track if a search has been made

  /**
   * Handle search button click
   */
  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty search
    setLoading(true);

    try {
      const data = await fetchBooks(query.trim());
      setBooks(data.docs.slice(0, 20)); // Limit to 20 results for performance
      setSearched(true);
    } catch (err) {
      console.error(err);
      setBooks([]);      // Reset books on error
      setSearched(true); // Still mark as searched
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* App Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Book Finder</h1>

      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Loading State */}
      {loading && <p className="text-center">Loading...</p>}

      {/* No Results State */}
      {!loading && searched && books.length === 0 && (
        <p className="text-center text-gray-500">No books found</p>
      )}

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}
