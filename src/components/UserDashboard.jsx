import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="container py-5">
      <div className="row gy-4">
        {/* User Info Card */}
        <div className="col-lg-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary text-white rounded-circle p-3 me-3" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <i className="bi bi-person-fill"></i>
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">{user?.fullName}</h4>
                  <p className="text-muted mb-0">@{user?.username}</p>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded">
                    <p className="text-muted small mb-1">Email</p>
                    <p className="fw-semibold mb-0">{user?.email}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded">
                    <p className="text-muted small mb-1">Role / Jabatan</p>
                    <p className="mb-0">
                      <span className={`badge ${isAdmin ? 'bg-warning' : 'bg-info'} fs-6`}>
                        {isAdmin ? 'Administrator' : 'Regular User'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded">
                    <p className="text-muted small mb-1">Status Verifikasi</p>
                    <p className="mb-0">
                      <span className="badge bg-success">✓ Terverifikasi</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded">
                    <p className="text-muted small mb-1">Tergabung Sejak</p>
                    <p className="fw-semibold mb-0">
                      {new Date(user?.createdAt).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Card */}
        <div className="col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">
                <i className="bi bi-shield-check"></i> Hak Akses
              </h5>

              <div className="list-group list-group-flush">
                {/* Home Access */}
                <div className="list-group-item px-0 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Halaman Beranda</p>
                    <small className="text-muted">Akses publik</small>
                  </div>
                  <span className="badge bg-success rounded-pill">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>

                {/* Books Access */}
                <div className="list-group-item px-0 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Katalog Buku</p>
                    <small className="text-muted">Akses publik</small>
                  </div>
                  <span className="badge bg-success rounded-pill">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>

                {/* Team Access */}
                <div className="list-group-item px-0 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Halaman Tim</p>
                    <small className="text-muted">Hanya member</small>
                  </div>
                  <span className="badge bg-success rounded-pill">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>

                {/* Contact Access */}
                <div className="list-group-item px-0 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Halaman Kontak</p>
                    <small className="text-muted">Hanya member</small>
                  </div>
                  <span className="badge bg-success rounded-pill">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </div>

                {/* Admin Access */}
                <div className="list-group-item px-0 py-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Panel Admin</p>
                    <small className="text-muted">Hanya admin</small>
                  </div>
                  {isAdmin ? (
                    <span className="badge bg-success rounded-pill">
                      <i className="bi bi-check-lg"></i>
                    </span>
                  ) : (
                    <span className="badge bg-danger rounded-pill">
                      <i className="bi bi-x-lg"></i>
                    </span>
                  )}
                </div>
              </div>

              {isAdmin && (
                <div className="alert alert-warning mt-4" role="alert">
                  <i className="bi bi-star-fill"></i> Anda memiliki akses administratif penuh
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
