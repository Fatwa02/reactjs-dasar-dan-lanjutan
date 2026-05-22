import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-book-fill"></i> booksales
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active fw-bold text-info' : 'nav-link'
              }
              to="/"
            >
              <i className="bi bi-house-fill"></i> Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active fw-bold text-info' : 'nav-link'
              }
              to="/books"
            >
              <i className="bi bi-book"></i> Books
            </NavLink>

            {isAuthenticated && isAdmin && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-link active fw-bold text-warning' : 'nav-link'
                }
                to="/admin"
              >
                <i className="bi bi-shield-lock"></i> Admin
              </NavLink>
            )}

            {isAuthenticated && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active fw-bold text-info' : 'nav-link'
                  }
                  to="/team"
                >
                  <i className="bi bi-people"></i> Team
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active fw-bold text-info' : 'nav-link'
                  }
                  to="/contact"
                >
                  <i className="bi bi-envelope"></i> Contact
                </NavLink>
              </>
            )}

            {/* Auth Section */}
            {isAuthenticated ? (
              <div className="nav-item dropdown">
                <button
                  className="btn btn-outline-success btn-sm ms-2"
                  id="userDropdown"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  aria-expanded={showUserMenu}
                >
                  <i className="bi bi-person-circle"></i> {user?.fullName || user?.username}
                  <i className={`bi bi-chevron-down ms-1 ${showUserMenu ? 'rotate' : ''}`}></i>
                </button>
                {showUserMenu && (
                  <div className="dropdown-menu dropdown-menu-end show" aria-labelledby="userDropdown">
                    <h6 className="dropdown-header">{user?.email}</h6>
                    <p className="dropdown-header text-muted small">
                      Role: <span className={`badge ${isAdmin ? 'bg-warning' : 'bg-info'}`}>{user?.role}</span>
                    </p>
                    <hr className="dropdown-divider" />
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active fw-bold text-success' : 'nav-link'
                  }
                  to="/register"
                >
                  <i className="bi bi-person-plus"></i> Register
                </NavLink>
                <Link to="/login" className="btn btn-primary btn-sm ms-2">
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Styles */}
      <style>{`
        .dropdown-menu.show {
          display: block;
          position: absolute;
          right: 0;
          top: 100%;
          margin-top: 0.5rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
