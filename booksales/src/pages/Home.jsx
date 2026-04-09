const Home = () => (
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="display-4 fw-bold">Buku adalah Jendela Dunia</h1>
        <p className="lead text-muted">Dapatkan koleksi buku terbaik dengan diskon hingga 50%.</p>
        <button className="btn btn-primary btn-lg">Mulai Belanja</button>
      </div>
      <div className="col-md-6">
        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600" className="img-fluid rounded shadow" alt="Books" />
      </div>
    </div>
  </div>
);

export default Home;