// Mock data for Complaint Management System
const mockCategories = [
  { categoryID: 1, categoryName: 'Technical Issue' },
  { categoryID: 2, categoryName: 'Billing' },
  { categoryID: 3, categoryName: 'Service Quality' },
  { categoryID: 4, categoryName: 'Product Defect' },
  { categoryID: 5, categoryName: 'Delivery' },
];

const mockComplaints = [
  {
    complaintID: 1,
    title: 'Login not working on mobile app',
    description: 'I am unable to log in to the mobile application. The app crashes every time I enter my credentials.',
    status: 'In Progress',
    userID: 1,
    categoryID: 1,
    createdAt: '2025-02-14T10:30:00Z',
    updatedAt: '2025-02-15T14:20:00Z',
  },
  {
    complaintID: 2,
    title: 'Incorrect billing amount',
    description: 'My last invoice shows an incorrect amount. I was charged $150 instead of the agreed $99.',
    status: 'Open',
    userID: 1,
    categoryID: 2,
    createdAt: '2025-02-15T09:15:00Z',
    updatedAt: '2025-02-15T09:15:00Z',
  },
  {
    complaintID: 3,
    title: 'Slow response from support team',
    description: 'It took over 48 hours to get a response from the support team.',
    status: 'Resolved',
    userID: 1,
    categoryID: 3,
    createdAt: '2025-02-10T11:00:00Z',
    updatedAt: '2025-02-12T16:45:00Z',
  },
];

const mockResponses = [
  {
    responseID: 1,
    complaintID: 1,
    responseText: 'Thank you for reporting this. Our team is investigating the mobile app login problem.',
    responseDate: '2025-02-14T15:00:00Z',
    authorName: 'Support Team',
  },
  {
    responseID: 2,
    complaintID: 1,
    responseText: 'We have identified the issue and deployed a fix. Please update to the latest version.',
    responseDate: '2025-02-15T14:20:00Z',
    authorName: 'Tech Support',
  },
];

const mockFeedback = [
  {
    feedbackID: 1,
    complaintID: 3,
    rating: 4,
    comments: 'Issue was resolved eventually. Would appreciate faster initial response.',
  },
];
