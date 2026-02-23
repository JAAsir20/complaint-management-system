// Shared utilities and nav rendering
function renderHeader(activePage) {
  const user = getCurrentUser();
  const isAdmin = user && user.role === 'admin';

  const userNav = user
    ? isAdmin
      ? `
        <a href="admin/index.html" class="${activePage === 'admin' ? 'active' : ''}">Dashboard</a>
        <a href="admin/complaints.html" class="${activePage === 'admin-complaints' ? 'active' : ''}">Complaints</a>
        <a href="admin/categories.html" class="${activePage === 'admin-categories' ? 'active' : ''}">Categories</a>
        <a href="admin/reports.html" class="${activePage === 'admin-reports' ? 'active' : ''}">Reports</a>
      `
      : `
        <a href="dashboard.html" class="${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
        <a href="complaints.html" class="${activePage === 'complaints' ? 'active' : ''}">My Complaints</a>
        <a href="complaint-new.html" class="${activePage === 'complaint-new' ? 'active' : ''}">New Complaint</a>
        <a href="profile.html" class="${activePage === 'profile' ? 'active' : ''}">Profile</a>
      `
    : '';

  const authButtons = user
    ? `<button type="button" onclick="logout(); window.location.href='index.html'">Logout</button>`
    : `
      <a href="login.html">Login</a>
      <a href="register.html" class="btn-primary">Register</a>
    `;

  const dashboardLink = user ? (isAdmin ? 'admin/index.html' : 'dashboard.html') : 'index.html';

  return `
    <header>
      <div class="page-container">
        <div class="header-inner">
          <a href="${dashboardLink}" class="logo">
            <div class="logo-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            Complaint Management
          </a>
          <nav>
            ${userNav}
            ${authButtons}
          </nav>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer>
      <div class="page-container">
        <p>&copy; ${new Date().getFullYear()} Complaint Management System. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function getStatusBadgeClass(status) {
  const map = {
    'Open': 'badge-open',
    'In Progress': 'badge-progress',
    'Resolved': 'badge-resolved',
    'Closed': 'badge-closed',
  };
  return map[status] || 'badge-closed';
}

function getCategoryName(categoryID) {
  const cat = mockCategories.find(c => c.categoryID === categoryID);
  return cat ? cat.categoryName : 'Uncategorized';
}
