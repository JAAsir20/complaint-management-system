// Simple auth state - uses localStorage for demo (front-end only)
const AUTH_KEY = 'cms_user';

function getCurrentUser() {
  const stored = localStorage.getItem(AUTH_KEY);
  return stored ? JSON.parse(stored) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

function login(email, password, isAdmin = false) {
  const user = {
    userID: 1,
    username: email.split('@')[0],
    email,
    role: isAdmin ? 'admin' : 'user',
  };
  setCurrentUser(user);
  return user;
}

function register(username, email, password) {
  const user = {
    userID: 1,
    username,
    email,
    role: 'user',
  };
  setCurrentUser(user);
  return user;
}

function logout() {
  setCurrentUser(null);
}

function requireAuth(adminOnly = false) {
  const user = getCurrentUser();
  const isAdminPage = window.location.pathname.includes('admin');
  const base = isAdminPage ? '../' : '';
  if (!user) {
    window.location.href = base + 'login.html';
    return null;
  }
  if (adminOnly && user.role !== 'admin') {
    window.location.href = base + 'dashboard.html';
    return null;
  }
  return user;
}
