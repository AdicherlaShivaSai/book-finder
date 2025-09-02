# 📚 Book Finder

A simple React application to search and display books using the **Open Library API**.  
This project demonstrates the use of React, Vite, Tailwind CSS, and basic API integration, with AI-assisted debugging using ChatGPT.

---

## 🧰 Technology Stack

- **Frontend Framework:** React 18 + Vite  
- **Styling:** Tailwind CSS  
- **State Management:** React `useState`  
- **API:** [Open Library Search API](https://openlibrary.org/search.json?title={bookTitle})  
- **AI Assistance:** ChatGPT (for debugging and improving code)  

---

## 📂 Project Structure

```
book-finder/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── books.js          # API call to Open Library
│   ├── components/
│   │   ├── BookCard.jsx       # Book card component
│   │   └── SearchBar.jsx      # Search input and button
│   ├── App.jsx               # Main App component
│   ├── index.css             # Tailwind base styles
│   └── main.jsx              # React entry point
├── package.json
└── tailwind.config.js
```

---

## 🌐 Live Demo

The Book Finder app is deployed and can be accessed here:  
[View Live on Render](https://book-finder-4ezv.onrender.com)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd book-finder
```

### 2️⃣ Install dependencies
Using pnpm:
```bash
pnpm install
```

### 3️⃣ Start the development server
```bash
pnpm run dev
```
- Open the browser at `http://localhost:5173/` (or the port shown in terminal).  
- You can now search books using the search bar.

### 4️⃣ Build for production
```bash
pnpm build
```
- Production-ready files are generated in the `dist/` folder.  
- Optional: Preview locally using `serve dist`.

### 5️⃣ Deployment on Render
1. Go to [Render](https://render.com/) and create a **Static Site**.  
2. Connect your GitHub repository.  
3. Set **Branch** (e.g., `main`) and configure:  
   - **Build Command:** `pnpm install && pnpm build`  
   - **Publish Directory:** `dist`  
4. Click **Create Static Site** → Render builds and deploys.  
5. Your live app URL can be shared under the **Live Demo** section above.

---

## 🎨 Features

- Search books by title using the Open Library API.  
- Display book title, author(s), and cover image.  
- Responsive design (works on mobile and desktop).  
- Handles missing data gracefully:
  - Missing author → shows "Unknown Author"  
  - Missing cover → shows placeholder image  
- Error handling for API/network issues.  

---

## ⚡ Using AI Assistance

This project was developed with **AI-assisted debugging and improvement** using ChatGPT.  
- Initial buggy code was debugged step by step with ChatGPT.  
- ChatGPT helped improve:
  - Error handling
  - Component structure
  - UI/UX and responsiveness
  - API integration

**Link to ChatGPT conversation:** [View ChatGPT Work](https://chatgpt.com/share/68b68c36-828c-8013-9ce4-071e52fceeb8)

---

## 📱 Responsiveness

The app is mobile-friendly:
- Grid layout adjusts automatically:
  ```css
grid-cols-1 sm:grid-cols-2 md:grid-cols-3
```
- Cards shrink and stack on smaller screens.

---

## 📝 Code Quality

- Clear variable names  
- Reusable components (`BookCard`, `SearchBar`)  
- Comments added for readability  
- Tailwind CSS for clean, modern styling

---

## 🧪 Testing

Test the following scenarios:

1. Normal search with results  
2. Search with no results → displays “No books found”  
3. Simulated network failure → displays error message  
4. Mobile and desktop views → check responsiveness  

---

## ✨ Optional Improvements

- Pagination for large result sets  
- Detailed book page on card click  
- Favorites or bookmarking system  

---

## 📄 License

This project is for educational purposes.

