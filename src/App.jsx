import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BookPage from './pages/BookPage';
import Admin from './pages/Admin';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">booksales</Link>
          <div className="navbar-nav ms-auto">
            {/* NavLink otomatis memberikan class 'active' jika link diklik */}
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-info" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-info" : "nav-link"} to="/books">Books</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-info" : "nav-link"} to="/admin">Admin</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-info" : "nav-link"} to="/team">Team</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-info" : "nav-link"} to="/contact">Contact</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-success" : "nav-link"} to="/register">Register</NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer className="text-center py-4 bg-light mt-5">
        <p className="text-muted">&copy; Project React Dasar</p>
      </footer>
    </Router>
  );
}

export default App;