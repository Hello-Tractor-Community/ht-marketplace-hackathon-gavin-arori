# Backend File Structure

This document provides an overview of the backend file structure and a brief description of each component.

```plaintext
backend/
├── controllers/
│   ├── chat/
│          ├── ChatController.js           # Handles chat-related logic such as message management and user interactions.
│   ├── dashboard/
│          ├── categoryController.js       # Manages categories in the dashboard, including CRUD operations.
│          ├── dashboardIndexController.js # Handles overall dashboard functionality and data aggregation.
│          ├── productController.js        # Manages product data including addition, update, and deletion.
│          ├── sellerController.js         # Handles seller-related operations such as profile and store management.
│   ├── home/
│          ├── cardController.js           # Handles card-related operations such as retrieval and updates.
│          ├── customerAuthController.js   # Manages customer authentication and authorization.
│          ├── homeControllers.js          # Handles homepage-related logic and general information retrieval.
│   ├── order/
│          ├── orderController.js          # Manages customer orders, including placement, status updates, and tracking.
│   ├── payment/
│          ├── paymentController.js        # Handles payment processing and payment gateway integration.
│   ├── authControllers.js                 # Manages authentication logic for users and sessions.
│   └── bannerController.js                # Handles banner management for promotions and marketing.
├── middlewares/
│          ├── authMiddleware.js           # Middleware for authenticating and authorizing requests.
├── models/
│   ├── chat/
│   ├── adminModel.js                      # Schema and model for admin users.
│   ├── authOrder.js                       # Schema for orders requiring authentication.
│   ├── bannerModel.js                     # Schema for managing banners in the system.
│   ├── cardModel.js                       # Schema for storing card-related data.
│   ├── categoryModel.js                   # Schema for product categories.
│   ├── customerModel.js                   # Schema for customer profiles.
│   ├── customerOrder.js                   # Schema for customer orders.
│   ├── myShopWallet.js                    # Schema for managing shop wallet transactions.
│   ├── productModel.js                    # Schema for product information.
│   ├── reviewModel.js                     # Schema for customer reviews of products.
│   ├── sellerModel.js                     # Schema for seller profiles.
│   ├── sellerWallet.js                    # Schema for seller wallet transactions.
│   ├── stripeModel.js                     # Schema for Stripe payment-related data.
│   ├── wishListModel.js                   # Schema for customer wishlists.
│   └── withdrawRequest.js                 # Schema for withdrawal requests from sellers.
├── routes/
│   ├── dashboard/
│          ├── categoryRoutes.js           # Defines routes for managing categories in the dashboard.
│          ├── dashboardIndexRoutes.js     # Routes for dashboard overview and operations.
│          ├── productRoutes.js            # Routes for managing products.
│          └── sellerRoutes.js             # Routes for seller-related operations.
│   ├── home/
│          ├── cardRoutes.js               # Routes for managing card functionalities.
│          ├── customerAuthRoutes.js       # Routes for customer authentication.
│          └── homeRoutes.js               # Routes for homepage-related functionality.
│   ├── order/
│          ├── authRoutes.js               # Routes for authentication.
│          ├── bannerRoutes.js             # Routes for banner management.
│          ├── chatRoutes.js               # Routes for chat features.
│          ├── orderRoutes.js              # Routes for managing orders.
│          └── paymentRoutes.js            # Routes for payment processing.
├── utils/
│   ├── db.js                              # Database configuration and connection setup.
│   ├── queryProducts.js                   # Utility functions for querying product data.
│   ├── response.js                        # Helper functions for formatting API responses.
│   └── tokenCreate.js                     # Utility for generating authentication tokens.
└── node_modules/                          # Directory for Node.js dependencies.
├── seed.js                                # Script for seeding initial data into the database.
└── server.js                              # Entry point for the backend application; initializes the server.


 # Key Highlights

1. controllers/: Contains all logic for handling API requests. Each subfolder or file is specific to a module or functionality (e.g., chat, dashboard).
2. middlewares/: Stores middleware functions for handling request pre-processing (e.g., authentication).
3. models/: Defines database schemas using ORM (e.g., Mongoose).
4. routes/: Defines API endpoints and maps them to corresponding controllers.
5. utils/: Utility files for reusable functions (e.g., database setup, token generation).
6. seed.js: Seeds initial data for testing or setup purposes.
7. server.js: Main application entry point, initializes the server and integrates all modules.


# Setup Instructions for Running the Project Locally

Follow these steps to set up and run the project on your local machine.

---

## Clone the Repository

Start by cloning the project repository from GitHub:

```bash
git clone https://github.com/Hello-Tractor-Community/ht-marketplace-hackathon-gavin-arori.git


## Install Dependencies

Navigate to the project directory

``bash
cd ht-marketplace-hackathon-gavin-arori
cd backend

# Install Node.js dependencies

npm install


## Set up Environment Variables
``
PORT=5000
DATABASE_URL=<your_database_connection_string>
JWT_SECRET=<your_jwt_secret_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
SECRET = 
api_key = cloudinary api key
api_secret =  cloudinary api secret
stripe_key =
CLOUDINARY_URL=

or use mine

``
PORT  = 5000
DB_URL = 'mongodb+srv://gavinarori:g123456@cluster0.7kfoiet.mongodb.net/collections'
SECRET = farid
cloud_name = dqrsvrteh
api_key = 661588265934887
api_secret = ZSTXeCS5LjDadeAKKRWGGvMKdUs

stripe_key =sk_test_51Nk8Y4F0B89ncn3xMHxYCwnaouDR6zuX83ckbJivv2jOUJ9CTka6anJcKMLnatgeBUeQq1RcRYynSPgp6f5zS4qF00YZFMYHuD

CLOUDINARY_URL=cloudinary://661588265934887:ZSTXeCS5LjDadeAKKRWGGvMKdUs@dqrsvrteh


## Run the Server

Start the server by running the following command:
To run the backend server in development mode, use the following command:
``
npm start


# Key Features of the Backend

## 1. User Management

- **Authentication and Authorization**:
  - Handled by `authControllers.js` and `authMiddleware.js`.
  - Supports JWT-based authentication for secure login and role-based access control.

- **Customer and Seller Profiles**:
  - Managed through `customerModel.js` and `sellerModel.js`.
  - Allows for profile creation, updates, and management.

---

## 2. Product Management

- **Product CRUD Operations**:
  - Managed by `productController.js` and `productModel.js`.
  - Enables adding, updating, deleting, and retrieving product details.

- **Category Management**:
  - Handled by `categoryController.js` and `categoryModel.js`.
  - Supports organizing products into categories for easier navigation.

---

## 3. Order and Payment System

- **Order Management**:
  - Controlled via `orderController.js` and `customerOrder.js`.
  - Includes placing orders, updating statuses, and tracking orders.

- **Payment Integration**:
  - Managed through `paymentController.js` and `stripeModel.js`.
  - Integrates with Stripe to handle payments, refunds, and transaction tracking.

---

## 4. Chat Functionality

- **Real-time Chat**:
  - Enabled via `ChatController.js` and `adminModel.js` in the `chat` directory.
  - Facilitates communication between customers, sellers, and admins.

---

## 5. Dashboard Management

- **Admin Dashboard**:
  - Managed by `dashboardIndexController.js`.
  - Provides an overview of platform statistics and operations.

- **Seller Dashboard**:
  - Handled by `sellerController.js` and `myShopWallet.js`.
  - Allows sellers to manage their products, orders, and financials.

- **Category and Product Management**:
  - Admins can add, modify, or delete categories and products through dedicated dashboard routes and controllers.

---

## 6. Promotions and Marketing

- **Banner Management**:
  - Managed via `bannerController.js` and `bannerModel.js`.
  - Allows admins to create and display promotional banners on the platform.

---

## 7. Wallet and Transactions

- **Seller Wallet**:
  - Controlled via `sellerWallet.js` and `withdrawRequest.js`.
  - Tracks seller earnings and processes withdrawal requests.

- **Customer Wallet**:
  - Managed by `myShopWallet.js`.
  - Tracks customer wallet balances for refunds or store credit.

---

## 8. Review and Wishlist

- **Product Reviews**:
  - Managed through `reviewModel.js`.
  - Allows customers to leave reviews and ratings for products.

- **Wishlist Management**:
  - Controlled by `wishListModel.js`.
  - Enables customers to save products for later purchase.

---

## 9. Database Management

- **Database Configuration**:
  - Set up using `db.js` in the `utils` directory.
  - Centralizes database connection and configuration.

- **Seeding Initial Data**:
  - Supported via `seed.js`, which preloads the database with sample or default data.

---

## 10. Utility Functions

- **Token Generation**:
  - Handled by `tokenCreate.js`.
  - Generates secure JWT tokens for authentication.

- **API Responses**:
  - Standardized response formatting provided by `response.js`.

- **Product Querying**:
  - Query optimization and helper methods for product retrieval managed in `queryProducts.js`.

---

## 11. Extensible Routing

- **Modular Routes**:
  - Each feature (e.g., products, orders, payments) has a dedicated route file for scalability and maintainability.

- **RESTful API Design**:
  - All routes follow RESTful conventions for predictable and consistent API behavior.

---

## 12. Security Features

- **Authentication Middleware**:
  - `authMiddleware.js` ensures only authorized users can access specific routes.

- **Environment-based Configuration**:
  - Sensitive data like API keys and database credentials are securely managed via environment variables in the `.env` file.


# Tech Stack Used

The backend of this project is built using the following technologies:

### Core Technologies
- **Node.js**: JavaScript runtime for building scalable and performant applications.
- **Express.js**: Web application framework for building APIs with minimal setup.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: MongoDB object modeling tool for Node.js.

### Authentication and Security
- **JWT (JSON Web Tokens)**: Used for secure authentication and authorization via `jsonwebtoken`.
- **bcrypt**: Library used for hashing and verifying passwords securely.

### File and Media Handling
- **Cloudinary**: Cloud storage service for managing media files like images and videos.

### Payment Integration
- **Stripe**: Payment processing service for handling payments and transactions.

### Real-time Communication
- **Socket.io**: Real-time bidirectional event-based communication between clients and server.

### Utilities and Middleware
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **cookie-parser**: Middleware for parsing cookies in HTTP requests.
- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **moment**: Library for date and time manipulation.
- **formidable**: Used for handling file uploads.

### Development Tools
- **Nodemon**: Development tool that automatically restarts the server when file changes are detected.

### Project Structure

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "server": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.2",
    "cloudinary": "^1.36.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "formidable": "^2.1.1",
    "jsonwebtoken": "^9.0.0",
    "moment": "^2.29.4",
    "mongoose": "^7.0.4",
    "socket.io": "^4.6.1",
    "stripe": "^12.18.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}


# Challenges and Lessons Learned

## Challenges

1. **Authentication and Authorization**
   - **Challenge**: Implementing secure authentication and role-based access control using JWT was tricky, especially managing token expiration and ensuring all routes were protected correctly.
   - **Solution**: Utilized `jsonwebtoken` to generate secure tokens and `authMiddleware.js` to protect routes. Implemented token expiration handling and refresh mechanisms to ensure security without disrupting the user experience.

2. **Real-time Communication with Socket.io**
   - **Challenge**: Setting up real-time communication between users (customers, sellers, and admins) through chat functionality was challenging due to the complexity of managing multiple socket connections and ensuring that messages were delivered to the correct users.
   - **Solution**: Used `socket.io` to establish real-time bidirectional communication. Implemented room-based communication to ensure that messages were routed to the correct users, based on their roles and sessions.

3. **Payment Integration**
   - **Challenge**: Integrating with Stripe to handle payments securely, including setting up secure endpoints and ensuring smooth error handling during transactions.
   - **Solution**: Leveraged `stripe` SDK to process payments and refunds. Created secure routes for payment processing, and implemented comprehensive error handling to ensure seamless transaction flow for users.

4. **File Upload Handling with Cloudinary**
   - **Challenge**: Managing media files (images/videos) uploaded by users, and ensuring they were stored securely and retrieved quickly, especially given the volume of images expected.
   - **Solution**: Integrated Cloudinary for cloud-based media storage. Used `cloudinary` SDK for uploading and retrieving images, reducing the load on the server and ensuring fast access to media.

5. **Database Optimization**
   - **Challenge**: Managing large datasets, especially when querying for products, orders, and customer data, which impacted the performance of the application.
   - **Solution**: Utilized Mongoose's query optimization techniques and added indexing to frequently queried fields in MongoDB to improve the speed and performance of database operations.

---

## Lessons Learned

1. **Importance of Secure Authentication**
   - Properly securing user data and ensuring a smooth authentication process is essential. Using JWT with proper expiration, refresh mechanisms, and role-based access controls significantly improved security and user experience.

2. **Handling Real-time Communication Effectively**
   - Real-time communication can add complexity to an application, especially in managing multiple users' connections. Using socket rooms for different user roles and managing event listeners efficiently helped to avoid bottlenecks and ensure smooth communication.

3. **Complexities of Payment Integration**
   - Payment systems are often complex and involve many edge cases. Ensuring that both successful and failed transactions were handled properly, with appropriate messaging for the user, was a critical lesson in making sure the payment flow was as seamless as possible.

4. **Cloud Storage for Media Files**
   - Storing images locally on the server can be cumbersome and slow. Cloud-based solutions like Cloudinary not only optimize file storage and retrieval but also provide powerful features like image transformation, which can be useful for handling product images.

5. **Optimizing Database Performance**
   - As the size of data increases, performance can degrade if queries are not optimized. Using database indexing and efficient query handling reduced query time and improved the overall speed of the application, ensuring that users could retrieve data quickly even at scale.

6. **Testing and Debugging**
   - Testing the backend thoroughly, especially APIs, was a crucial lesson. It is easy to miss edge cases, and having automated tests (like unit tests for controllers and models) helped ensure robustness. Using tools like Postman for API testing was also invaluable.
