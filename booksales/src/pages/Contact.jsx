import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow border-0">
            <div className="card-body p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold">Hubungi BookSale</h2>
              <p className="text-center text-muted mb-4">Punya pertanyaan tentang koleksi buku kami? Silakan kirim pesan!</p>
              
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" placeholder="Contoh: John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Alamat Email</label>
                  <input type="email" className="form-control" placeholder="nama@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea className="form-control" rows="4" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
                  Kirim Sekarang
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="mb-0 text-muted">Atau hubungi kami via:</p>
                <p className="fw-bold">support@booksale.id | (021) 1234567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;