# Personal Finance Manager

A comprehensive web application for managing personal finances, tracking expenses, income, and investments.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Recommended Commands](#recommended-commands)
- [Database](#database)

## Features
- User authentication (Sign Up, Sign In)
- Dashboard with financial overview
- Income tracking and management
- Expense tracking and categorization
- Investment portfolio management
- Transaction history
- Profile management
- Responsive design for all devices

## Screenshots

### Sign In Page
![Sign In Page](screenshots/signin.png)
*User authentication with email and password*

### Sign Up Page
![Sign Up Page](screenshots/signup.png)
*New user registration form*

### Dashboard
![Dashboard](screenshots/dashboard.png)
*Main dashboard showing financial overview, recent transactions, and quick actions*

### Income Management
![Income](screenshots/income.png)
*Income tracking and management interface*

### Expense Tracking
![Expenses](screenshots/expenses.png)
*Expense tracking with categorization*

### Investment Portfolio
![Investments](screenshots/investments.png)
*Investment portfolio management and tracking*

### Profile Settings
![Profile](screenshots/profile.png)
*User profile and settings management*

*Note: Place your screenshot images in a `screenshots` directory in your project root.*

## Technologies Used
- **Frontend:**
  - React.js
  - Material-UI (MUI)
  - Axios for API calls
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - JWT for authentication

## Architecture
The application follows a modern MERN stack architecture:
- **Client:** React-based single-page application
- **Server:** Express.js RESTful API
- **Database:** MongoDB for data persistence
- **Authentication:** JWT-based token authentication
- **State Management:** React hooks and context
- **Styling:** Material-UI components with custom theming

## Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-finance-manager.git
   cd personal-finance-manager
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

4. Create a .env file in the root directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. Start the development servers:
   ```bash
   # Start backend server (from root directory)
   npm run server

   # Start frontend server (from client directory)
   npm start
   ```

## Recommended Commands
- **Run full stack:**
  ```bash
  npm run dev
  ```

- **Run backend only:**
  ```bash
  npm run server
  ```

- **Run frontend only:**
  ```bash
  cd client
  npm start
  ```

- **Build frontend:**
  ```bash
  cd client
  npm run build
  ```

## Database
The application uses MongoDB with the following main collections:
- **Users:** Stores user account information
- **Transactions:** Stores income and expense records
- **Investments:** Stores investment portfolio data

Database Schema:
```javascript
// User Schema
{
  name: String,
  email: String,
  password: String,
  date: Date
}

// Transaction Schema
{
  user: ObjectId,
  type: String,
  amount: Number,
  category: String,
  description: String,
  date: Date
}

// Investment Schema
{
  user: ObjectId,
  type: String,
  amount: Number,
  returns: Number,
  description: String,
  date: Date
}
```

## API Endpoints

### Authentication
- POST `/api/users` - Register a new user
- POST `/api/auth` - Login user
- GET `/api/auth` - Get authenticated user

### Transactions
- GET `/api/transactions` - Get all transactions
- POST `/api/transactions` - Add new transaction
- PUT `/api/transactions/:id` - Update transaction
- DELETE `/api/transactions/:id` - Delete transaction

### Investments
- GET `/api/investments` - Get all investments
- POST `/api/investments` - Add new investment
- PUT `/api/investments/:id` - Update investment
- DELETE `/api/investments/:id` - Delete investment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 