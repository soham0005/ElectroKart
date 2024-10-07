# .env Configuration

In your project in backend folder, you need to create a .env file to store sensitive environment variables like JWT Secret and MongoDB connection URL. This file should be kept private and not shared with others (add .env to your .gitignore file to avoid accidentally committing it to version control).

# Add Environment Variables in .env file

MONGO_URL = Your mongo url / database name
JWT_SECRET = any random strong string like password


# How to Use Environment Variables in Your Code:
In your index.js or any other files where you need these environment variables, you will load them using dotenv like this:

const dotenv = require('dotenv');

//configure env
dotenv.config();


# API Documentation for User Authentication

# Base URL:
http://127.0.0.1:3001/api/v1/auth

# 1. Register User API

Endpoint: /register
Method: POST
Description: Registers a new user by providing necessary information like name, email, password, and phone number.
Request Body:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456",
  "phone": "1234567890"
}


# 2. Login User API

Endpoint: /login
Method: POST
Description: Logs in an existing user by validating email and password.
Request Body:
{
  "email": "johndoe@example.com",
  "password": "123456"
}

# Protected Route: User Authentication

Endpoint: /user-auth
Method: GET
Description: A protected route accessible only to logged-in users.
Headers:
Authorization: Bearer <JWT Token>

# 4. Protected Route: Admin Authentication

Endpoint: /admin-auth
Method: GET
Description: A protected route accessible only to users with admin privileges.
Headers:
Authorization: Bearer <JWT Token>


# JWT Token:

After successful login, Postman will return a JWT token. Use this token in the Authorization header for accessing protected routes.
Authorization Format: Bearer <JWT Token>


# Making a User an Admin:

In your current API setup, users have a role field in the database, where:

# role: 0
indicates a regular user.

# role: 1 
indicates an admin user.

To change a registered user to an admin, you need to manually update the role field of the user in the MongoDB database.