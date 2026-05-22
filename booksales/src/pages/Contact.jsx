import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0 overflow-hidden">
            <div className="row g-0">
              {/* Info Kontak (Biru) */}
              <div className="col-md-4 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                <h3>Hubungi Kami</h3>
                <p className="small mb-4">Kami siap membantu Anda menemukan buku pemrograman terbaik.</p>
                <div className="mb-3">
                  <i className="bi bi-geo-alt me-2"></i> 
                  Jl. Lenteng Agung Raya No.20, Jakarta Selatan.
                </div>
                <div className="mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  info@nfbooksale.com
                </div>
              </div>

              {/* Form Input */}
              <div className="col-md-8 p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Nama Depan</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subjek</label>
                    <select className="form-select">
                      <option>Tanya Stok Buku</option>
                      <option>Keluhan Layanan</option>
                      <option>Kerja Sama</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-5 shadow-sm">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;