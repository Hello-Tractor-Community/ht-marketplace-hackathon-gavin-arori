# File Structure for Dashboard Application

## Root Level
- **public/**
  - Contains static files such as HTML and other public assets.
  
- **src/**
  - The main source directory for the project.

---

## src/ Structure

### 1. **api/**
- **api.js**
  - Centralized API file for handling network requests and integrations.

---

### 2. **assets/**
- Stores images, stylesheets, or other asset files for the application.

---

### 3. **layout/**
- **Header.jsx**
  - Component for the application header.
- **MainLayout.jsx**
  - The primary layout structure for the application, likely includes Header and Sidebar.
- **Sidebar.jsx**
  - Component for the sidebar navigation menu.

---

### 4. **navigation/**
- **allNav.js**
  - Contains all navigation routes or menu data.
- **index.js**
  - Entry point for navigation exports.

---

### 5. **router/**
#### routes/
- **adminRoutes.js**
  - Defines route paths and components specific to admin users.
- **privateRoutes.js**
  - Handles private/protected routes for authenticated users.
- **ProtectRoute.jsx**
  - Component to guard routes and redirect unauthenticated users.
- **publicRoutes.js**
  - Defines public, unauthenticated routes.
- **sellerRoutes.js**
  - Routes tailored for seller-specific functionalities.

- **Router.jsx**
  - Main routing file to define and manage all routes in the app.

---

### 6. **store/**
#### Reducers/
- **authReducer.js**
  - Manages authentication-related state.
- **bannerReducer.js**
  - Handles banner-related state and logic.
- **categoryReducer.js**
  - State management for product categories.
- **chatReducer.js**
  - Reducer for chat functionalities.
- **dashboardIndexReducer.js**
  - State management for dashboard indices.
- **OrderReducer.js**
  - Handles orders-related state.
- **PaymentReducer.js**
  - Reducer for payment-related logic.
- **productReducer.js**
  - Manages product-related state.
- **sellerReducer.js**
  - State management for seller functionalities.
- **rootReducers.js**
  - Combines all individual reducers into a single root reducer.

- **index.js**
  - Store configuration and setup file.

---

### 7. **utils/**
- **utils.js**
  - Helper functions and utility methods for the application.

---

### 8. **views/**
#### admin/
- **AdminDashboard.jsx**
  - Admin panel's main dashboard view.
- **Category.jsx**
  - View for managing categories.
- **ChatSeller.jsx**
  - Chat functionality interface for sellers.
- **DeactiveSellers.jsx**
  - Displays or manages deactivated seller accounts.
- **OrderDetails.jsx**
  - Detailed view for specific orders.
- **Orders.jsx**
  - General view for listing and managing orders.
- **PaymentRequest.jsx**
  - Interface for handling payment requests.
- **SellerDetails.jsx**
  - View for inspecting seller information.
- **SellerRequest.jsx**
  - Displays seller requests for approval.
- **Sellers.jsx**
  - Overview of all sellers.

#### auth/
- **AdminLogin.jsx**
  - Login interface for admins.
- **Login.jsx**
  - General user login page.
- **Register.jsx**
  - Registration page for new users.

#### components/
- **Search.jsx**
  - A reusable search component.

#### seller/
- **AddBanner.jsx**
  - View to add promotional banners.
- **AddProduct.jsx**
  - Interface for adding new products.
- **DeleteProduct.jsx**
  - View for managing product deletions.
- **EditProduct.jsx**
  - Page to edit product details.
- **OrderDetails.jsx**
  - Detailed view for seller-specific orders.
- **Orders.jsx**
  - Seller-specific order management page.
- **Payments.jsx**
  - Interface for viewing and managing payments.

---




📂 public
└── 📄 index.html      # Main HTML file for the application

📂 src
├── 📂 api
│   └── 📄 api.js       # Centralized API calls and configurations
│
├── 📂 assets
│   └── (images, stylesheets, or other assets go here)
│
├── 📂 layout
│   ├── 📄 Header.jsx       # Application header component
│   ├── 📄 MainLayout.jsx   # Main layout wrapper for the app
│   └── 📄 Sidebar.jsx      # Sidebar navigation component
│
├── 📂 navigation
│   ├── 📄 allNav.js        # Centralized navigation items
│   └── 📄 index.js         # Navigation index for exporting
│
├── 📂 router
│   ├── 📂 routes
│   │   ├── 📄 adminRoutes.js      # Admin-specific route definitions
│   │   ├── 📄 privateRoutes.js    # Private route definitions
│   │   ├── 📄 ProtectRoute.jsx    # Guard for protected routes
│   │   ├── 📄 publicRoutes.js     # Public route definitions
│   │   └── 📄 sellerRoutes.js     # Seller-specific route definitions
│   └── 📄 Router.jsx              # Centralized routing configuration
│
├── 📂 store
│   ├── 📂 Reducers
│   │   ├── 📄 authReducer.js           # Reducer for authentication
│   │   ├── 📄 bannerReducer.js         # Reducer for banners
│   │   ├── 📄 categoryReducer.js       # Reducer for categories
│   │   ├── 📄 chatReducer.js           # Reducer for chat functionalities
│   │   ├── 📄 dashboardIndexReducer.js # Reducer for dashboard indices
│   │   ├── 📄 OrderReducer.js          # Reducer for orders
│   │   ├── 📄 PaymentReducer.js        # Reducer for payments
│   │   ├── 📄 productReducer.js        # Reducer for products
│   │   ├── 📄 sellerReducer.js         # Reducer for sellers
│   │   └── 📄 rootReducers.js          # Combines all reducers
│   └── 📄 index.js                     # Redux store configuration
│
├── 📂 utils
│   └── 📄 utils.js         # Helper functions for common tasks
│
├── 📂 views
│   ├── 📂 admin
│   │   ├── 📄 AdminDashboard.jsx   # Admin panel dashboard view
│   │   ├── 📄 Category.jsx         # Manage product categories
│   │   ├── 📄 ChatSeller.jsx       # Chat interface for sellers
│   │   ├── 📄 DeactiveSellers.jsx  # List of deactivated sellers
│   │   ├── 📄 OrderDetails.jsx     # Detailed order view
│   │   ├── 📄 Orders.jsx           # Admin order management
│   │   ├── 📄 PaymentRequest.jsx   # View for payment requests
│   │   ├── 📄 SellerDetails.jsx    # Detailed view of a seller
│   │   ├── 📄 SellerRequest.jsx    # Manage seller approval requests
│   │   └── 📄 Sellers.jsx          # Overview of all sellers
│   │
│   ├── 📂 auth
│   │   ├── 📄 AdminLogin.jsx       # Admin login interface
│   │   ├── 📄 Login.jsx            # General user login
│   │   └── 📄 Register.jsx         # User registration form
│   │
│   ├── 📂 components
│   │   └── 📄 Search.jsx           # Reusable search component
│   │
│   ├── 📂 seller
│       ├── 📄 AddBanner.jsx        # Add promotional banners
│       ├── 📄 AddProduct.jsx       # Add new products
│       ├── 📄 DeleteProduct.jsx    # Delete existing products
│       ├── 📄 EditProduct.jsx      # Edit product details
│       ├── 📄 OrderDetails.jsx     # Detailed view of seller orders
│       ├── 📄 Orders.jsx           # Seller order management
│       └── 📄 Payments.jsx         # Manage seller payments
│       └── 📄 Products.jsx        
│       └── 📄 Profile.jsx        
│       └── 📄 SellerDashboard.jsx        
│       └── 📄 SellerToAdmin.jsx         
│       └── 📄 SellerToCustomer.jsx
│   ├── 📄 Deactive.jsx
│   ├── 📄 Home.jsx
│   ├── 📄 Pagination.jsx  
│   ├── 📄 Pending.jsx
│   ├── 📄 Success.jsx  
│   ├── 📄 UnAuthorized.jsx            




## Key Features

### 1. **Role-Based Access and Navigation**
- Centralized **role-specific routing**:
  - `adminRoutes.js`: Routes for admin functionalities.
  - `sellerRoutes.js`: Routes tailored for sellers.
  - `publicRoutes.js`: Open to all users without authentication.
  - `privateRoutes.js`: Restricted to authenticated users.
  - `ProtectRoute.jsx`: Ensures protected routes are accessible only to authorized users.

### 2. **Admin Features**
- **Admin Dashboard**: (`AdminDashboard.jsx`)  
  A comprehensive overview of key metrics and activity for administrators.
- **Manage Categories**: (`Category.jsx`)  
  Add, edit, or remove product categories.
- **Seller Management**:
  - View and manage all sellers (`Sellers.jsx`).
  - Approve or reject seller requests (`SellerRequest.jsx`).
  - View seller details (`SellerDetails.jsx`).
  - Handle deactivated sellers (`DeactiveSellers.jsx`).
- **Order and Payment Management**:
  - Review orders (`Orders.jsx`, `OrderDetails.jsx`).
  - Handle payment requests (`PaymentRequest.jsx`).

### 3. **Seller Features**
- **Seller Dashboard**: (`SellerDashboard.jsx`)  
  Provides sellers with an overview of their sales, products, and performance.
- **Product Management**:
  - Add new products (`AddProduct.jsx`).
  - Edit product details (`EditProduct.jsx`).
  - Delete products (`DeleteProduct.jsx`).
- **Banner Management**: (`AddBanner.jsx`)  
  Add promotional banners for marketing purposes.
- **Order and Payment Management**:
  - Manage orders (`Orders.jsx`).
  - View order details (`OrderDetails.jsx`).
  - Manage payments (`Payments.jsx`).
- **Seller Communication**:
  - Interact with admins (`SellerToAdmin.jsx`).
  - Connect with customers (`SellerToCustomer.jsx`).
- **Profile Management**: (`Profile.jsx`)  
  View and update seller profile information.

### 4. **Authentication and Authorization**
- **Admin Authentication**:
  - Admin login page (`AdminLogin.jsx`).
- **User Authentication**:
  - General login page (`Login.jsx`).
  - Registration page for new users (`Register.jsx`).
- **Unauthorized Access Handling**: (`UnAuthorized.jsx`)  
  Displays an error page for unauthorized actions.

### 5. **Shared Components and Utilities**
- **Reusable Components**:
  - `Search.jsx`: A universal search component for filtering and searching data.
  - `Pagination.jsx`: Efficient navigation through paginated data.
- **Layouts**:
  - `Header.jsx` and `Sidebar.jsx`: Provide a consistent UI across the app.
  - `MainLayout.jsx`: Central layout structure wrapping key components.
- **Utilities**:
  - `utils.js`: Common helper functions for handling repetitive tasks.

### 6. **Dynamic State Management**
- Powered by **Redux**:
  - **Reducers** for state management, including:
    - Authentication (`authReducer.js`).
    - Product and category handling (`productReducer.js`, `categoryReducer.js`).
    - Chat functionality (`chatReducer.js`).
    - Order and payment management (`OrderReducer.js`, `PaymentReducer.js`).
    - Dashboard state (`dashboardIndexReducer.js`).
    - Seller-specific states (`sellerReducer.js`).

### 7. **Custom Views and Feedback**
- **Dynamic Pages**:
  - `Home.jsx`: Landing page of the application.
  - `Pending.jsx`: Status view for ongoing processes.
  - `Success.jsx`: Confirmation page for successful actions.
  - `Deactive.jsx`: View for deactivated content or users.
- **Error Handling**: Displays meaningful error messages for unauthorized or invalid actions.

### 8. **Responsive and Scalable Design**
- **Modular file structure** ensures ease of scalability and maintenance.
- Centralized API management via `api.js` to streamline backend communications.

### 9. **User and Admin Collaboration**
- Provides seamless communication channels between sellers, customers, and admins using specialized views like:
  - `ChatSeller.jsx`: Admin-seller chat interface.
  - `SellerToAdmin.jsx`: For seller-admin interactions.
  - `SellerToCustomer.jsx`: For seller-customer interactions.

---

This project delivers a complete solution for multi-role platforms, ensuring efficient navigation, secure authentication, and robust state management while fostering smooth collaboration across users.

## Tech Stack Used

### Frontend
- **React.js**:  
  Used for building a dynamic, component-based user interface, ensuring high performance and reusability.
- **React Router**:  
  Facilitates client-side routing for seamless navigation between public, private, admin, and seller-specific pages.
- **Redux**:  
  State management library to handle global application state effectively. Used Redux Toolkit for reducing boilerplate and enhancing scalability.
- **JavaScript (ES6)**:  
  Provides modern JavaScript features like arrow functions, async/await, and destructuring for clean and efficient code.
- **HTML5 & CSS3**:  
  Core technologies for structuring and styling the UI, ensuring responsiveness and user-friendly design.
- **Axios**:  
  Handles API requests and responses with clean error handling and interceptors for centralized configuration.

---

### Backend (Optional/Integration)
- **RESTful APIs**:  
  The application communicates with a backend API (assumed Node.js or another framework) for CRUD operations, role-based actions, and data management.

---

### Tools and Libraries
- **Redux Toolkit**:  
  Simplifies state management by providing built-in tools for creating slices and asynchronous actions.
- **React Developer Tools**:  
  Assists in debugging React components and props during development.
- **PostCSS/SCSS** :  
  For enhanced styling features like nesting, variables, and mixins.
- **Prettier and ESLint**:  
  Enforces consistent code style and ensures code quality through linting and formatting.
- **React Icons**:  
  Provides a library of vector icons to enhance UI aesthetics.

---

### Development and Build Tools
- **Node.js & npm**:  
  Node.js is used for the development environment, while npm is utilized for dependency management.
- **Webpack/CRA (Create React App)**:  
  Used for bundling assets and running the development server.
- **Git**:  
  Version control system for collaborative coding and managing code versions.

---

### Design and Prototyping Tools
- **Figma** :  
  For wireframing and designing the user interface before implementation.

---

### Database (Optional/Backend Integration)
- **MongoDB**:  
  Used for managing and storing data if integrated with a backend API.

---

### Hosting and Deployment
- **Netlify/Vercel** :  
  For hosting the frontend application with CI/CD pipelines for smooth deployments.


---



## Challenges Faced
1. **Role-Based Routing**:
   - Ensuring smooth navigation while restricting access to certain features.
   - Implemented `ProtectRoute.jsx` to manage route guards.
   
2. **State Management**:
   - Managing complex state for authentication, products, orders, and more.
   - Solved using modularized Redux reducers for scalability.

3. **Scalability**:
   - Structuring the project for future expansion without losing maintainability.
   - Used a modular file structure to group related components, routes, and reducers.

---

## Lessons Learned
1. **Importance of Modular Design**:
   - A well-structured file system ensures easier collaboration and scalability.
   
2. **Redux Efficiency**:
   - Leveraging Redux Toolkit simplified state management and reduced boilerplate code.

3. **Seamless API Integration**:
   - Centralizing API calls in `api.js` improved maintainability and reduced redundancy.

4. **Focus on User Roles**:
   - Role-based separation of views (Admin, Seller, and Public) helped tailor user experiences efficiently.


# Setup Instructions for Running the Project Locally

Follow these steps to set up and run the project on your local machine.

---

## Clone the Repository

Start by cloning the project repository from GitHub:

```bash
git clone https://github.com/Hello-Tractor-Community/ht-marketplace-hackathon-gavin-arori.git


## Install Dependencies

Navigate to the project directory

cd ht-marketplace-hackathon-gavin-arori
cd client``

# Install Node.js dependencies
`
npm install`


## Set up Environment Variables
has no environment variables.

## Run the Server

Start your local host by running the following command:
To run the local host in development mode, use the following command:
``
npm start

To run the local host in build mode, use the following command:
npm run build