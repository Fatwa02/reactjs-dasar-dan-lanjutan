import React, { useState } from 'react';
import books from '../Utils/books'; // Mengimpor data dari Utils/books.js [cite: 3]

const BookPage = () => {
  // Menggunakan hooks useState untuk menyimpan data buku [cite: 27, 28]
  const [bookList, setBookList] = useState(books);

  // Fungsi untuk menambah data (Nilai Tambah Tugas 3) [cite: 27, 28]
  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Buku Baru " + (bookList.length + 1),
      author: "Penulis Baru",
      year: 2024,
      description: "Deskripsi buku baru yang ditambahkan melalui hooks.",
      image: "https://placehold.co/400x600?text=New+Book"
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Daftar Koleksi Buku</h2>
        {/* Tombol penambah data menggunakan hooks [cite: 27, 28] */}
        <button className="btn btn-success" onClick={handleAddBook}>
          Tambah Buku
        </button>
      </div>

      <div className="row g-4">
        {/* Menggunakan metode map untuk menampilkan data [cite: 26] */}
        {bookList.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={book.image} 
                className="card-img-top" 
                alt={book.title} 
                style={{ height: '350px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <p className="text-muted mb-1">Penulis: {book.author} ({book.year})</p>
                <p className="card-text small text-secondary">{book.description}</p>
                <button className="btn btn-outline-primary w-100">Beli Sekarang</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPage;