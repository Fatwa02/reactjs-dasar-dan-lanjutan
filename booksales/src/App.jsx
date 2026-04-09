import React from "react";
// Pastikan library terpasang: npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Komponen Navigasi
import Navbar from "./components/Navbar";

// Import Halaman (Pastikan nama file di folder 'pages' sama persis huruf kapitalnya)
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        {/* Navbar akan selalu muncul di atas semua halaman */}
        <Navbar />
        
        {/* Bagian ini akan berganti isi sesuai URL */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer akan selalu muncul di bawah */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <p className="mb-0">&copy; 2026 BookSale.id</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;