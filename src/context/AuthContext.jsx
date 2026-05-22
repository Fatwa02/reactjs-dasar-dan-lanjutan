import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth harus digunakan dalam AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cek localStorage saat aplikasi pertama kali load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulasi login - ambil user dari localStorage
    const usersData = localStorage.getItem('users');
    let users = [];
    
    if (usersData) {
      try {
        users = JSON.parse(usersData);
      } catch (error) {
        console.error('Error parsing users:', error);
      }
    }

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      // Jangan simpan password di localStorage untuk keamanan
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true, message: 'Login berhasil' };
    }

    return { success: false, message: 'Email atau password salah' };
  };

  const register = (userData) => {
    // Ambil users yang sudah ada dari localStorage
    const usersData = localStorage.getItem('users');
    let users = [];
    
    if (usersData) {
      try {
        users = JSON.parse(usersData);
      } catch (error) {
        console.error('Error parsing users:', error);
      }
    }

    // Cek apakah email atau username sudah ada
    if (users.some((u) => u.email === userData.email)) {
      return { success: false, message: 'Email sudah terdaftar' };
    }

    if (users.some((u) => u.username === userData.username)) {
      return { success: false, message: 'Username sudah digunakan' };
    }

    // Tambah user baru dengan role default 'user'
    const newUser = {
      id: Date.now(),
      ...userData,
      role: 'user', // Role default
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true, message: 'Registrasi berhasil. Silakan login.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasRole = (role) => {
    if (!user) return false;
    return user.role === role;
  };

  const hasAnyRole = (roles) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    hasRole,
    hasAnyRole,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isUser: user?.role === 'user'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
