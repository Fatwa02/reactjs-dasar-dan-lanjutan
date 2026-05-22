import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      return 'Email tidak boleh kosong.';
    }
    if (!formData.password) {
      return 'Password tidak boleh kosong.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    // Simulasi delay untuk request
    setTimeout(() => {
      const result = login(formData.email, formData.password);

      if (result.success) {
        setSuccessMessage('✓ Login berhasil! Mengalihkan...');
        setFormData({ email: '', password: '' });
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(result.message);
      }
      setIsLoading(false);
    }, 800);
  };

  const handleDemoAdmin = () => {
    // Demo account admin
    setFormData({
      email: 'admin@booksales.com',
      password: 'admin123'
    });
    setError('');
    setSuccessMessage('Demo akun admin sudah diisi. Silakan login.');
  };

  const handleDemoUser = () => {
    // Demo account user
    setFormData({
      email: 'user@booksales.com',
      password: 'user123'
    });
    setError('');
    setSuccessMessage('Demo akun user sudah diisi. Silakan login.');
  };

  return (
    <div className="bg-gradient py-5" style={{ minHeight: 'calc(100vh - 200px)', backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <div className="mb-3">
                    <i className="bi bi-box-arrow-in-right" style={{ fontSize: '2.5rem', color: '#667eea' }}></i>
                  </div>
                  <h2 className="fw-bold text-dark">Login</h2>
                  <p className="text-muted">Masuk ke akun Anda untuk melanjutkan</p>
                </div>

                {error && (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <i className="bi bi-exclamation-circle"></i> {error}
                    <button type="button" className="btn-close" onClick={() => setError('')}></button>
                  </div>
                )}

                {successMessage && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <i className="bi bi-check-circle"></i> {successMessage}
                    <button type="button" className="btn-close" onClick={() => setSuccessMessage('')}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope" style={{ color: '#667eea' }}></i>
                      </span>
                      <input
                        type="email"
                        className={`form-control border-start-0 ${error && !formData.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@contoh.com"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-lock" style={{ color: '#667eea' }}></i>
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control border-start-0 border-end-0 ${error && !formData.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Masukkan password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-start-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Loading...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-box-arrow-in-right"></i> Login
                        </>
                      )}
                    </button>
                  </div>

                  {/* Forgot Password & Register Links */}
                  <div className="text-center">
                    <p className="text-muted mb-2">
                      Belum punya akun? <Link to="/register" className="text-primary fw-semibold text-decoration-none">Daftar sekarang</Link>
                    </p>
                    <p className="text-muted small">
                      <a href="#" className="text-secondary text-decoration-none">Lupa password?</a>
                    </p>
                  </div>
                </form>

                {/* Demo Accounts Section */}
                <hr className="my-4" />
                <div className="mt-4">
                  <p className="text-center text-muted small mb-3"><strong>Akun Demo Tersedia:</strong></p>
                  <div className="d-grid gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-sm"
                      onClick={handleDemoAdmin}
                    >
                      <i className="bi bi-shield-lock"></i> Demo Admin
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info btn-sm"
                      onClick={handleDemoUser}
                    >
                      <i className="bi bi-person"></i> Demo User
                    </button>
                  </div>
                </div>

                {/* Demo Credentials Info */}
                <div className="alert alert-info small mt-3" role="alert">
                  <strong>Demo Admin:</strong> admin@booksales.com / admin123<br />
                  <strong>Demo User:</strong> user@booksales.com / user123
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="card border-light bg-white text-dark mt-4 shadow-sm">
              <div className="card-body p-4">
                <h6 className="card-title fw-bold mb-3">Info Keamanan</h6>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Jangan pernah bagikan password Anda</li>
                  <li>Logout saat menggunakan komputer publik</li>
                  <li>Gunakan password yang kuat</li>
                  <li>Periksa URL sebelum login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
