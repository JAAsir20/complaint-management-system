# Complaint Management System

A professional front-end for a Complaint Management System built with **HTML, CSS, and JavaScript** (no frameworks).

## Features

- **User Management**: Login, Register, Profile
- **Complaint Handling**: Submit, view, and track complaints
- **Category Management**: Organize complaints by category
- **Feedback**: Submit feedback on resolved complaints
- **Admin Dashboard**: Manage complaints, categories, and view reports
- **Reports**: Analytics and complaint trends

## How to Run

1. Open `index.html` in your web browser (double-click or drag into browser)
2. Or use a local server for best experience:
   - **Python**: `python -m http.server 8000` then visit http://localhost:8000
   - **Node.js**: `npx serve` then visit the URL shown

## Demo Login

- **Regular User**: Enter any email and password, leave "Sign in as Administrator" unchecked
- **Admin**: Enter any email and password, check "Sign in as Administrator"

## Project Structure

```
├── index.html          # Home page
├── login.html          # User login
├── register.html       # User registration
├── dashboard.html      # User dashboard
├── profile.html        # User profile
├── complaints.html     # User's complaints list
├── complaint-new.html  # Submit new complaint
├── complaint-detail.html # View complaint with responses & feedback
├── admin/
│   ├── index.html      # Admin dashboard
│   ├── complaints.html # Manage all complaints
│   ├── complaint-detail.html # Admin complaint management
│   ├── categories.html # Category management
│   └── reports.html    # Reports & analytics
├── css/
│   └── style.css      # All styles
└── js/
    ├── auth.js        # Authentication (localStorage)
    ├── data.js        # Mock data
    └── common.js      # Shared utilities
```

## Note

This is a **front-end only** implementation. All data is mock data stored in `js/data.js`. Authentication uses `localStorage` for demo purposes. Connect to a backend API to make it production-ready.
