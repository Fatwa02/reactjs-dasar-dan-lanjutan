// src/pages/Home.jsx
import React, { useState } from 'react';
import booksData from '../Utils/books';

function Home() {
  // Menggunakan Hooks useState (Nilai Tambah!) [cite: 27, 28]
  const [listBuku, setListBuku] = useState(booksData);

  const tambahBukuDummy = () => {
    const newBook = {
      id: listBuku.length + 1,
      title: "Buku Baru " + (listBuku.length + 1),
      author: "Penulis Anonim",
      image: "https://placehold.co/400x600?text=New+Book"
    };
    setListBuku([...listBuku, newBook]);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Koleksi Buku Terpopuler</h2>
        <button className="btn btn-success" onClick={tambahBukuDummy}>+ Tambah Buku (Hooks)</button>
      </div>
      
      <div className="row g-4">
        {listBuku.map((buku) => ( // Menggunakan metode .map() [cite: 26]
          <div className="col-md-4" key={buku.id}>
            <div className="card h-100 shadow-sm">
              <img src={buku.image} className="card-img-top" alt={buku.title} style={{height: '300px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{buku.title}</h5>
                <p className="text-muted small">Oleh: {buku.author}</p>
                <p className="card-text text-truncate">{buku.description}</p>
                <button className="btn btn-primary btn-sm w-100">Detail Buku</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;