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
![3](https://github.com/user-attachments/assets/308cc14e-7800-4a8b-b8aa-95e7bcd722c8)
![4](https://github.com/user-attachments/assets/affa5e4a-c93d-4bc6-997f-57afdd927da8)
![5](https://github.com/user-attachments/assets/54467e2b-25c8-47f4-9a40-add7f064a294)


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
   git clone https://github.com/omkarsalunkheatp1211/Personal-Financial-Manager.git
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
