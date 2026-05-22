import React, { useState } from 'react';

const Admin = () => {
  const [genres, setGenres] = useState([
    { id: 1, name: 'Fiksi' },
    { id: 2, name: 'Fantasi' },
    { id: 3, name: 'Pengembangan Diri' }
  ]);
  const [authors, setAuthors] = useState([
    { id: 1, name: 'Dwi Fatwa' },
    { id: 2, name: 'Makarim Sabat' },
  ]);
  const [newGenre, setNewGenre] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleAddGenre = (event) => {
    event.preventDefault();
    const trimmedGenre = newGenre.trim();
    if (!trimmedGenre) {
      setMessage('Nama genre tidak boleh kosong.');
      return;
    }
    if (genres.some((genre) => genre.name.toLowerCase() === trimmedGenre.toLowerCase())) {
      setMessage('Genre sudah ada.');
      return;
    }
    setGenres([...genres, { id: genres.length + 1, name: trimmedGenre }]);
    setNewGenre('');
    setMessage('Genre berhasil ditambahkan.');
  };

  const handleAddAuthor = (event) => {
    event.preventDefault();
    const trimmedAuthor = newAuthor.trim();
    if (!trimmedAuthor) {
      setMessage('Nama author tidak boleh kosong.');
      return;
    }
    if (authors.some((author) => author.name.toLowerCase() === trimmedAuthor.toLowerCase())) {
      setMessage('Author sudah ada.');
      return;
    }
    setAuthors([...authors, { id: authors.length + 1, name: trimmedAuthor }]);
    setNewAuthor('');
    setMessage('Author berhasil ditambahkan.');
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-uppercase text-secondary mb-2">Panel Admin</p>
        <h2 className="fw-bold">Manajemen Genre & Author</h2>
        <p className="text-muted">Kelola data genre dan author untuk koleksi buku Anda.</p>
      </div>

      {message && (
        <div className="alert alert-info py-2" role="alert">
          {message}
        </div>
      )}

      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Genre Buku</h4>
              <p className="text-muted small">Lihat dan tambah genre baru untuk katalog.</p>

              <ul className="list-group mb-4">
                {genres.map((genre) => (
                  <li key={genre.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {genre.name}
                    <span className="badge bg-primary rounded-pill">ID {genre.id}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleAddGenre} className="row g-2 align-items-end">
                <div className="col-8">
                  <label htmlFor="genreInput" className="form-label">Genre Baru</label>
                  <input
                    id="genreInput"
                    type="text"
                    className="form-control"
                    value={newGenre}
                    onChange={(event) => setNewGenre(event.target.value)}
                    placeholder="Masukkan nama genre"
                  />
                </div>
                <div className="col-4 d-grid">
                  <button type="submit" className="btn btn-success">Tambah Genre</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Author</h4>
              <p className="text-muted small">Tambah author baru yang akan muncul di halaman buku.</p>

              <div className="table-responsive mb-4">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr className="text-secondary">
                      <th>#</th>
                      <th>Nama Author</th>
                    </tr>
                  </thead>
                  <tbody>
                    {authors.map((author) => (
                      <tr key={author.id}>
                        <td>{author.id}</td>
                        <td>{author.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <form onSubmit={handleAddAuthor} className="row g-2 align-items-end">
                <div className="col-8">
                  <label htmlFor="authorInput" className="form-label">Author Baru</label>
                  <input
                    id="authorInput"
                    type="text"
                    className="form-control"
                    value={newAuthor}
                    onChange={(event) => setNewAuthor(event.target.value)}
                    placeholder="Masukkan nama author"
                  />
                </div>
                <div className="col-4 d-grid">
                  <button type="submit" className="btn btn-primary">Tambah Author</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
