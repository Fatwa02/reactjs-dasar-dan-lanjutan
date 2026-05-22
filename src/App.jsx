import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import initializeDemoData from './Utils/initializeData';

import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BookPage from './pages/BookPage';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  useEffect(() => {
    // Inisialisasi demo data saat aplikasi pertama kali load
    initializeDemoData();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes - Hanya untuk authenticated user (admin) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Hanya untuk authenticated user (user atau admin) */}
          <Route
            path="/team"
            element={
              <ProtectedRoute>
                <Team />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
        </Routes>

        <footer className="text-center py-4 bg-light mt-5">
          <p className="text-muted">&copy; Project React Dasar - Sistem Autentikasi & Otorisasi</p>
        </footer>
      </Router>
    </AuthProvider>
  );
}

export default App;