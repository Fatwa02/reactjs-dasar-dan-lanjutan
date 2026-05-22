import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => {
    return username.length >= 3 && username.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(username);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap tidak boleh kosong.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email tidak boleh kosong.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username tidak boleh kosong.';
    } else if (!validateUsername(formData.username)) {
      newErrors.username = 'Username harus 3-20 karakter, hanya huruf, angka, underscore, dan dash.';
    }

    if (!formData.password) {
      newErrors.password = 'Password tidak boleh kosong.';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password minimal 6 karakter.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password tidak boleh kosong.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password dan konfirmasi password tidak sesuai.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate registration success
    setSuccessMessage('✓ Registrasi berhasil! Silakan login dengan akun Anda.');
    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});

    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="bg-light py-5" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <div className="mb-3">
                    <i className="bi bi-person-plus-fill" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                  </div>
                  <h2 className="fw-bold text-dark">Daftar Akun</h2>
                  <p className="text-muted">Bergabunglah dengan komunitas pecinta buku kami</p>
                </div>

                {successMessage && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong className="d-block mb-1">{successMessage}</strong>
                    <button type="button" className="btn-close" onClick={() => setSuccessMessage('')}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  {/* Nama Lengkap */}
                  <div className="mb-4">
                    <label htmlFor="fullName" className="form-label fw-semibold">
                      Nama Lengkap
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person" style={{ color: '#6c757d' }}></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control border-start-0 ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    {errors.fullName && (
                      <div className="text-danger small mt-2">
                        <i className="bi bi-exclamation-circle"></i> {errors.fullName}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope" style={{ color: '#6c757d' }}></i>
                      </span>
                      <input
                        type="email"
                        className={`form-control border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@contoh.com"
                      />
                    </div>
                    {errors.email && (
                      <div className="text-danger small mt-2">
                        <i className="bi bi-exclamation-circle"></i> {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Username */}
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-at" style={{ color: '#6c757d' }}></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control border-start-0 ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Buat username unik (3-20 karakter)"
                      />
                    </div>
                    {errors.username && (
                      <div className="text-danger small mt-2">
                        <i className="bi bi-exclamation-circle"></i> {errors.username}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-lock" style={{ color: '#6c757d' }}></i>
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={`form-control border-start-0 border-end-0 ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Minimal 6 karakter"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-start-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div className="text-danger small mt-2">
                        <i className="bi bi-exclamation-circle"></i> {errors.password}
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label fw-semibold">
                      Konfirmasi Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-lock-check" style={{ color: '#6c757d' }}></i>
                      </span>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className={`form-control border-start-0 border-end-0 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Ulangi password Anda"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary border-start-0"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <div className="text-danger small mt-2">
                        <i className="bi bi-exclamation-circle"></i> {errors.confirmPassword}
                      </div>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="d-grid gap-2 d-md-flex mb-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-md-grow-1"
                    >
                      <i className="bi bi-check-circle"></i> Daftar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg flex-md-grow-1"
                      onClick={handleReset}
                    >
                      <i className="bi bi-arrow-clockwise"></i> Reset
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-muted">
                      Sudah punya akun? <a href="#" className="text-primary fw-semibold text-decoration-none">Login di sini</a>
                    </p>
                  </div>
                </form>

                {/* Password Strength Indicator */}
                <div className="mt-5 pt-4 border-top">
                  <p className="text-muted small mb-3"><strong>Panduan password yang aman:</strong></p>
                  <ul className="small text-muted ps-3">
                    <li>Minimal 6 karakter</li>
                    <li>Gabungkan huruf besar, kecil, angka, dan simbol</li>
                    <li>Jangan gunakan informasi pribadi</li>
                    <li>Jangan gunakan password yang sama di akun lain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
