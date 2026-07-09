import React, { createContext, useContext, useMemo, useState } from 'react';
import { users, rolePermissions } from '../data/seed';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const loginAs = (userId) => setCurrentUser(users.find(u => u.id === userId));
  const logout = () => setCurrentUser(null);
  const can = (permission) => {
    if (!currentUser) return false;
    const perms = rolePermissions[currentUser.role] || [];
    return perms.includes('*') || perms.includes(permission);
  };
  const value = useMemo(() => ({ currentUser, loginAs, logout, can }), [currentUser]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
