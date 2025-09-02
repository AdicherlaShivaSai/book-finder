/**
 * Fetch books from Open Library API by title
 * @param {string} title - The title of the book to search
 * @returns {Promise<Object>} - Returns an object containing `docs` array
 */
export const fetchBooks = async (title) => {
  if (!title) return { docs: [] }; // Return empty array if title is empty

  try {
    const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return { docs: [] }; // Fallback to empty array on error
  }
};
