import React, { useState } from 'react';

const Admin = () => {
  const [genres, setGenres] = useState([
    { id: 1, name: 'Fiksi' },
    { id: 2, name: 'Fantasi' },
    { id: 3, name: 'Pengembangan Diri' }
  ]);
  const [authors, setAuthors] = useState([
    { id: 1, name: 'Dwi Fatwa' },
    { id: 2, name: 'Makarim Sabat' }
  ]);
  const [newGenre, setNewGenre] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [editGenreId, setEditGenreId] = useState(null);
  const [editGenreName, setEditGenreName] = useState('');
  const [editAuthorId, setEditAuthorId] = useState(null);
  const [editAuthorName, setEditAuthorName] = useState('');

  const getNextId = (items) => {
    if (!items.length) return 1;
    return Math.max(...items.map((item) => item.id)) + 1;
  };

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

    setGenres([...genres, { id: getNextId(genres), name: trimmedGenre }]);
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

    setAuthors([...authors, { id: getNextId(authors), name: trimmedAuthor }]);
    setNewAuthor('');
    setMessage('Author berhasil ditambahkan.');
  };

  const handleEditGenre = (genre) => {
    setEditGenreId(genre.id);
    setEditGenreName(genre.name);
    setMessage('');
  };

  const handleUpdateGenre = (event) => {
    event.preventDefault();
    const trimmedGenre = editGenreName.trim();
    if (!trimmedGenre) {
      setMessage('Nama genre tidak boleh kosong.');
      return;
    }
    if (genres.some((genre) => genre.id !== editGenreId && genre.name.toLowerCase() === trimmedGenre.toLowerCase())) {
      setMessage('Genre sudah ada.');
      return;
    }

    const updatedGenres = genres.map((genre) =>
      genre.id === editGenreId ? { ...genre, name: trimmedGenre } : genre
    );
    setGenres(updatedGenres);
    setEditGenreId(null);
    setEditGenreName('');
    setMessage('Genre berhasil diperbarui.');
  };

  const handleCancelEditGenre = () => {
    setEditGenreId(null);
    setEditGenreName('');
    setMessage('');
  };

  const handleDeleteGenre = (genreId) => {
    setGenres(genres.filter((genre) => genre.id !== genreId));
    if (editGenreId === genreId) {
      setEditGenreId(null);
      setEditGenreName('');
    }
    setMessage('Genre berhasil dihapus.');
  };

  const handleEditAuthor = (author) => {
    setEditAuthorId(author.id);
    setEditAuthorName(author.name);
    setMessage('');
  };

  const handleUpdateAuthor = (event) => {
    event.preventDefault();
    const trimmedAuthor = editAuthorName.trim();
    if (!trimmedAuthor) {
      setMessage('Nama author tidak boleh kosong.');
      return;
    }
    if (authors.some((author) => author.id !== editAuthorId && author.name.toLowerCase() === trimmedAuthor.toLowerCase())) {
      setMessage('Author sudah ada.');
      return;
    }

    const updatedAuthors = authors.map((author) =>
      author.id === editAuthorId ? { ...author, name: trimmedAuthor } : author
    );
    setAuthors(updatedAuthors);
    setEditAuthorId(null);
    setEditAuthorName('');
    setMessage('Author berhasil diperbarui.');
  };

  const handleCancelEditAuthor = () => {
    setEditAuthorId(null);
    setEditAuthorName('');
    setMessage('');
  };

  const handleDeleteAuthor = (authorId) => {
    setAuthors(authors.filter((author) => author.id !== authorId));
    if (editAuthorId === authorId) {
      setEditAuthorId(null);
      setEditAuthorName('');
    }
    setMessage('Author berhasil dihapus.');
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
              <p className="text-muted small">Lihat, edit, dan hapus genre untuk katalog.</p>

              <ul className="list-group mb-4">
                {genres.map((genre) => (
                  <li key={genre.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                    {editGenreId === genre.id ? (
                      <form onSubmit={handleUpdateGenre} className="w-100 d-flex gap-2 flex-column flex-sm-row align-items-start align-items-sm-center">
                        <div className="flex-grow-1">
                          <label className="form-label visually-hidden" htmlFor={`editGenre-${genre.id}`}>
                            Edit Genre
                          </label>
                          <input
                            id={`editGenre-${genre.id}`}
                            type="text"
                            className="form-control"
                            value={editGenreName}
                            onChange={(event) => setEditGenreName(event.target.value)}
                          />
                        </div>
                        <div className="d-flex gap-2">
                          <button type="submit" className="btn btn-success">Simpan</button>
                          <button type="button" className="btn btn-outline-secondary" onClick={handleCancelEditGenre}>Batal</button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <div>
                          <strong>{genre.name}</strong>
                          <div className="text-muted small">ID {genre.id}</div>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => handleEditGenre(genre)}>
                            Edit
                          </button>
                          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteGenre(genre.id)}>
                            Hapus
                          </button>
                        </div>
                      </>
                    )}
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
              <p className="text-muted small">Lihat, edit, dan hapus author dalam daftar.</p>

              <div className="table-responsive mb-4">
                <table className="table table-borderless align-middle">
                  <thead>
                    <tr className="text-secondary">
                      <th>#</th>
                      <th>Nama Author</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {authors.map((author) => (
                      <tr key={author.id}>
                        <td>{author.id}</td>
                        <td className="w-100">
                          {editAuthorId === author.id ? (
                            <form onSubmit={handleUpdateAuthor} className="d-flex gap-2 align-items-center">
                              <input
                                type="text"
                                className="form-control"
                                value={editAuthorName}
                                onChange={(event) => setEditAuthorName(event.target.value)}
                              />
                            </form>
                          ) : (
                            author.name
                          )}
                        </td>
                        <td>
                          {editAuthorId === author.id ? (
                            <div className="btn-group btn-group-sm" role="group">
                              <button type="button" className="btn btn-success" onClick={handleUpdateAuthor}>
                                Simpan
                              </button>
                              <button type="button" className="btn btn-outline-secondary" onClick={handleCancelEditAuthor}>
                                Batal
                              </button>
                            </div>
                          ) : (
                            <div className="btn-group btn-group-sm" role="group">
                              <button type="button" className="btn btn-outline-primary" onClick={() => handleEditAuthor(author)}>
                                Edit
                              </button>
                              <button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteAuthor(author.id)}>
                                Hapus
                              </button>
                            </div>
                          )}
                        </td>
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
