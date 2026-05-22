// Utility untuk inisialisasi demo data
export const initializeDemoData = () => {
  // Cek apakah sudah ada data users di localStorage
  const existingUsers = localStorage.getItem('users');
  
  if (!existingUsers) {
    // Inisialisasi dengan demo accounts
    const demoUsers = [
      {
        id: 1,
        fullName: 'Administrator',
        email: 'admin@booksales.com',
        username: 'admin',
        password: 'admin123', // Password disimpan untuk demo saja
        role: 'admin',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        fullName: 'Regular User',
        email: 'user@booksales.com',
        username: 'user',
        password: 'user123',
        role: 'user',
        createdAt: new Date().toISOString()
      }
    ];
    
    localStorage.setItem('users', JSON.stringify(demoUsers));
    console.log('Demo data initialized:', demoUsers);
  }
};

export default initializeDemoData;
