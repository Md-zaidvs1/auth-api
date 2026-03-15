# Auth API — JWT Authentication with Node.js

A REST API implementing user authentication and authorization using Bearer tokens.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs

## Project Structure
```
auth-api/
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── views/
├── .env
├── server.js
└── README.md
```

## Setup
1. Clone the repo
2. Run `npm install`
3. Create `.env` file with:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```
4. Run `npm run dev`

## API Endpoints

| Method | Route | Auth Required | Description |
|--------|-------|---------------|-------------|
| POST | /api/auth/register | No | Register new user |
| POST | /api/auth/login | No | Login and get JWT token |
| GET | /api/users/me | Bearer Token | Get logged-in user profile |

## Sample Requests

### Register
POST /api/auth/register
```json
{
  "username": "alice",
  "email": "alice@example.com",
  "password": "secret123"
}
```

### Login
POST /api/auth/login
```json
{
  "email": "alice@example.com",
  "password": "secret123"
}
```

### Get Profile
GET /api/users/me
Header: Authorization: Bearer YOUR_TOKEN

## Live URL
https://auth-api-or57.onrender.com