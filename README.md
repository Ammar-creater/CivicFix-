# CivicFix – Public Problem Reporting System

CivicFix is a modern digital platform designed to empower citizens to report public infrastructure and municipal issues (e.g., damaged roads, broken streetlights, uncollected garbage, sewage overflows, and water leaks). The system streamlines problem tracking across three statuses: **Reported**, **In Progress**, and **Resolved**.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, Mongoose (MongoDB Atlas)
- **Environment & Auth:** `dotenv`, `cors`, JWT (upcoming)

---

## 📁 Repository Structure

```text
CivicFix/
├── client/                 # React frontend application (Vite + Tailwind CSS)
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend application
│   ├── controllers/        # Request logic & placeholder handlers
│   │   ├── reportController.js
│   │   └── userController.js
│   ├── middleware/         # Custom Express middleware
│   │   └── errorMiddleware.js
│   ├── models/             # Mongoose schemas & models
│   │   ├── Report.js
│   │   └── User.js
│   ├── routes/             # Express route definitions
│   │   ├── reportRoutes.js
│   │   └── userRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js           # Server entry point
└── README.md
```

---

## 📌 Development Progress (Module 1 - Days 1 to 3)

### ✅ Day 1: Scaffolding & Initial Schemas
- Initialized Git repository and directory structure.
- Scaffolded Express backend server with `/api/health` check endpoint and MongoDB Atlas connection.
- Scaffolded React frontend client using Vite and Tailwind CSS.
- Designed initial Mongoose schemas:
  - `User`: `name`, `email`, `password`, `role` (`citizen`, `admin`).
  - `Report`: `description`, `photoUrl`, `status` (`Reported`, `In Progress`, `Resolved`), `createdBy`.

### ✅ Day 2: Modular Architecture & Route Setup
- Refactored server architecture into `controllers/`, `routes/`, and `models/` pattern.
- Created route handlers and controllers for API endpoints:
  - `/api/reports`: Placeholder endpoints for listing, viewing, and creating reports.
  - `/api/users`: Placeholder endpoints for users, registration, and authentication.
- Implemented robust error handling middleware:
  - `notFound`: Custom 404 error handler for invalid endpoints.
  - `errorHandler`: Global Express error handler returning structured JSON errors.

### ✅ Day 3: Full API Skeleton & Controller Logic
- Implemented core controller functions in `reportController.js`:
  - `createReport`: Handles report submission with validation.
  - `getAllReports`: Retrieves all reports from MongoDB.
  - `getReportById`: Retrieves a specific report by its ObjectId with safety validation.
- Configured automated test suite (`jest` + `supertest`) to verify all report endpoints with mocked Mongoose models for fast, offline, and memory-safe validation.
- Cleaned up custom development directories and configuration footprints.

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description | Status |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Health check endpoint | Active |
| `GET` | `/api/reports` | Get all reports | Active |
| `GET` | `/api/reports/:id` | Get report details | Active |
| `POST` | `/api/reports` | Submit a new report | Active |
| `GET` | `/api/users` | Get user list | Placeholder |
| `POST` | `/api/users/register` | Register user account | Placeholder |
| `POST` | `/api/users/login` | User login | Placeholder |

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas database URI

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/CivicFix.git
   cd CivicFix
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server/` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
   Start the backend development server:
   ```bash
   npm run dev   # or node server.js
   ```

3. **Running Tests**
   Run the automated Jest suite to verify route and controller functionality:
   ```bash
   npm test
   ```

4. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

---

## 📅 Project Roadmap Overview

- **Module 1 (Jul 20 – Jul 26):** Foundation, Schemas, API Skeleton, & UI Layouts *(In Progress)*
- **Module 2 (Jul 27 – Aug 02):** Citizen Reporting, Image Upload, & JWT Auth
- **Module 3 (Aug 03 – Aug 09):** Admin Dashboard & Complaint Workflow
- **Module 4 (Aug 10 – Aug 15):** Testing, Analytics, Deployment, & Documentation