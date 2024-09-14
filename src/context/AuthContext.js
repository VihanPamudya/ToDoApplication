import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    setUser(newUser);
    return newUser;
  };

  const login = (email, password) => {
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
