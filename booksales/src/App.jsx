import React from 'react';

// Komponen Navbar
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#">📚 BookSale.id</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Our Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

// Halaman Home
const Home = () => (
  <section id="home" className="py-5 text-center bg-light">
    <div className="container py-5">
      <h1 className="display-4 fw-bold">Jendela Dunia di Tangan Anda</h1>
      <p className="lead mb-4">Temukan koleksi buku terlengkap, dari fiksi hingga literatur teknis dengan harga terbaik.</p>
      <img 
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80" 
        alt="Library" 
        className="img-fluid rounded shadow-lg mb-4"
        style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
      />
      <div>
        <button className="btn btn-primary btn-lg px-4 me-md-2">Lihat Katalog</button>
        <button className="btn btn-outline-secondary btn-lg px-4">Promo Hari Ini</button>
      </div>
    </div>
  </section>
);

// Halaman Team
const Team = () => (
  <section id="team" className="py-5">
    <div className="container">
      <h2 className="text-center mb-5">Tim Pengelola BookSale</h2>
      <div className="row text-center">
        {[
          { name: 'Dwi Fatwa', role: 'Founder', },
          { name: 'Rizki Fajar', role: 'Curator', },
          { name: 'Dani', role: 'Logistics',}
        ].map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Halaman Contact
const Contact = () => (
  <section id="contact" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 bg-white rounded text-dark">
            <div className="mb-3">
              <label className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="nama@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Pesan</label>
              <textarea className="form-control" rows="4" placeholder="Tuliskan pertanyaan Anda..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// App Component Utama
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Team />
      <Contact />
      <footer className="py-3 text-center bg-secondary text-white">
        <p>&copy; 2026 BookSale.id - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;