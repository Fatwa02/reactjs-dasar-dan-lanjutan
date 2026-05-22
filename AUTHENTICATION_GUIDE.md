# Dokumentasi Sistem Autentikasi & Otorisasi

## Overview
Sistem autentikasi dan otorisasi yang telah diimplementasikan menggunakan React Context API, localStorage untuk penyimpanan data, dan Protected Routes untuk membatasi akses halaman berdasarkan role pengguna.

## Struktur Folder
```
src/
├── context/
│   └── AuthContext.jsx           # Context untuk mengelola state autentikasi
├── components/
│   ├── Navbar.jsx                # Navbar responsif dengan auth info
│   ├── ProtectedRoute.jsx         # Komponen untuk protected routes
│   └── UserDashboard.jsx          # Dashboard user yang menampilkan info role
├── pages/
│   ├── Login.jsx                  # Halaman login
│   ├── Register.jsx               # Halaman registrasi
│   ├── Admin.jsx                  # Halaman admin (protected)
│   ├── Team.jsx                   # Halaman tim (protected)
│   ├── Contact.jsx                # Halaman kontak (protected)
│   ├── Home.jsx                   # Halaman beranda
│   └── BookPage.jsx               # Halaman katalog buku
├── Utils/
│   └── initializeData.js          # Utility untuk inisialisasi demo data
└── App.jsx                        # Main app dengan AuthProvider
```

## Komponen Utama

### 1. AuthContext (src/context/AuthContext.jsx)
Mengelola state autentikasi aplikasi dengan fitur:
- **login(email, password)** - Login dengan email dan password
- **register(userData)** - Registrasi pengguna baru
- **logout()** - Logout pengguna
- **hasRole(role)** - Cek apakah user memiliki role tertentu
- **hasAnyRole(roles)** - Cek apakah user memiliki salah satu role dari array
- **isAuthenticated** - Boolean untuk cek apakah user sudah login
- **isAdmin** - Boolean untuk cek apakah user adalah admin
- **isUser** - Boolean untuk cek apakah user adalah user biasa

**Data Disimpan di:**
- localStorage key: `user` - menyimpan data user yang login
- localStorage key: `users` - menyimpan daftar semua user terdaftar

### 2. ProtectedRoute (src/components/ProtectedRoute.jsx)
Komponen untuk membatasi akses halaman berdasarkan:
- **isAuthenticated** - Apakah user sudah login
- **requiredRole** - Role yang diperlukan (opsional)

Jika akses ditolak, akan menampilkan pesan error.

### 3. Navbar (src/components/Navbar.jsx)
Navbar responsif yang menampilkan:
- Menu publik (Home, Books)
- Menu terbatas untuk user terautentikasi (Team, Contact)
- Menu admin hanya untuk role admin (Admin)
- User info dan logout button untuk user yang sudah login
- Register dan Login button untuk user yang belum login

### 4. UserDashboard (src/components/UserDashboard.jsx)
Dashboard user yang menampilkan:
- Informasi profil (nama, email, username, role)
- Daftar hak akses berdasarkan role
- Informasi verifikasi dan tanggal pendaftaran

## Role & Permissions

### Role: user
**Dapat Mengakses:**
- ✓ Home (publik)
- ✓ Books (publik)
- ✓ Team (protected)
- ✓ Contact (protected)
- ✗ Admin (hanya admin)

### Role: admin
**Dapat Mengakses:**
- ✓ Home (publik)
- ✓ Books (publik)
- ✓ Team (protected)
- ✓ Contact (protected)
- ✓ Admin (hanya admin)

## Demo Accounts

Sistem sudah diinisialisasi dengan 2 akun demo:

### Admin Account
- **Email:** admin@booksales.com
- **Password:** admin123
- **Username:** admin
- **Role:** admin

### User Account
- **Email:** user@booksales.com
- **Password:** user123
- **Username:** user
- **Role:** user

## Cara Penggunaan

### 1. Login
```javascript
import { useAuth } from './context/AuthContext';

const { login } = useAuth();

const handleLogin = () => {
  const result = login('admin@booksales.com', 'admin123');
  if (result.success) {
    // Login berhasil
  }
};
```

### 2. Register
```javascript
const { register } = useAuth();

const handleRegister = () => {
  const result = register({
    fullName: 'John Doe',
    email: 'john@example.com',
    username: 'johndoe',
    password: 'password123'
  });
  if (result.success) {
    // Registrasi berhasil
  }
};
```

### 3. Protected Route
```javascript
<Route
  path="/admin"
  element={
    <ProtectedRoute requiredRole="admin">
      <Admin />
    </ProtectedRoute>
  }
/>
```

### 4. Cek Role di Component
```javascript
import { useAuth } from './context/AuthContext';

const MyComponent = () => {
  const { user, isAdmin, hasRole } = useAuth();
  
  if (isAdmin) {
    return <div>Admin content</div>;
  }
  
  return <div>User content</div>;
};
```

## Flow Autentikasi

1. **Startup** → Aplikasi memeriksa localStorage untuk user yang sudah login
2. **Register** → User mendaftar dengan form → Data disimpan di localStorage
3. **Login** → User login dengan email & password → Jika valid, data user disimpan di localStorage
4. **Protected Route** → Component ProtectedRoute mengecek apakah user authenticated dan memiliki role yang sesuai
5. **Logout** → Data user dihapus dari localStorage

## Keamanan (Notes)

⚠️ **PENTING untuk Production:**
- Password seharusnya di-hash sebelum disimpan
- Gunakan JWT token atau session server-side
- Jangan simpan password di localStorage
- Implementasikan refresh token
- Gunakan HTTPS
- Implementasikan CSRF protection
- Rate limiting untuk login/register

## Fitur Tambahan Yang Bisa Diimplementasikan

1. **Forgot Password** - Reset password melalui email
2. **Email Verification** - Verifikasi email saat registrasi
3. **Two-Factor Authentication** - Keamanan login tambahan
4. **Profile Update** - Update data user
5. **Role-Based Access Control (RBAC)** - Sistem permission yang lebih detail
6. **Audit Log** - Mencatat aktivitas user
7. **Session Timeout** - Logout otomatis setelah idle
8. **Password Strength Meter** - Indikator kekuatan password

## Testing

Silakan test fitur autentikasi dengan:
1. Buka aplikasi di browser
2. Klik tombol Login di navbar
3. Gunakan demo account (admin atau user)
4. Navigasi ke halaman yang berbeda sesuai role
5. Coba akses halaman yang tidak diizinkan
6. Test logout dan kembali ke halaman publik

---

**Created:** May 2026
**Last Updated:** May 2026
