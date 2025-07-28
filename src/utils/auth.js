// utils/auth.js
export const authenticateUser = (email, password) => {
  // Static credentials (in a real app, these would come from your backend)
  const validCredentials = [
    { email: 'user@example.com', password: 'password123', name: 'John Doe' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin' }
  ];

  const user = validCredentials.find(
    cred => cred.email === email && cred.password === password
  );

  if (user) {
    // Generate a simple token (in real app, this would come from your backend)
    const token = btoa(`${email}:${password}`);
    return { success: true, token, user: { email: user.email, name: user.name } };
  }

  return { success: false, message: 'Invalid email or password' };
};

export const storeAuthToken = (token, userData) => {
  localStorage.setItem('authToken', token);
  localStorage.setItem('user', JSON.stringify(userData));
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const getUserData = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

export const clearAuth = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};