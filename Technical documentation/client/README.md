# Project Structure

This document provides an overview of the project file structure and a brief description of each folder and key files.




## Description of Folders and Files

- **`node_modules/`**: Contains all the npm dependencies for the project.
- **`public/`**: Includes static files such as `index.html` which serves as the root of the app and other assets.
- **`src/`**: Main source code for the React application.
  - **`api/`**: Placeholder for API service files to handle backend requests.
  - **`assets/`**: Static assets like icons, fonts, or images used across the application.
  - **`components/`**: Includes reusable React components.
    - **`dashboard/`**: Components for user dashboards like order management, chat, and wishlist.
    - **`products/`**: Product-related components such as product listings, banners, ratings, and reviews.
  - **`pages/`**: Main pages for routing such as login, register, home, and product details.
  - **`store/`**: Redux store for application-wide state management.
    - **`reducers/`**: Reducer files for handling various slices of the state.
  - **`utils/`**: Helper files for configuration and user authentication.
  - **`App.jsx`**: The main React application component.
  - **`App.css`**: Global CSS for styling.
  - **`index.js`**: Application entry point for rendering the React app.
  - **`tailwind.config.js`**: Tailwind CSS configuration for styling.
- **`README.md`**: Documentation and setup instructions for the project.

# Key Features of the Client Application

The client application provides a comprehensive, user-friendly interface with a wide range of features to ensure seamless functionality and an enhanced user experience.

## General Features

- **Responsive Design**: Fully responsive user interface optimized for desktop, tablet, and mobile devices.
- **User Authentication**:
  - Register new accounts.
  - Login and logout functionality.
  - Protected routes to secure access to authenticated pages.
  - Password reset and change options.
- **Global State Management**: Integrated Redux store for managing application state efficiently across all components.

## Dashboard Features

- **User Dashboard**: Centralized hub for managing user activities.
  - View and manage orders.
  - Access and update the wishlist.
  - Real-time chat support system.
  - Update password for account security.

## Product Management Features

- **Product Listings**:
  - Browse available products with details like price, description, and ratings.
  - Filter and sort products by categories, price, or relevance.
  - Search functionality for finding specific products.
- **Featured Products**: Highlighted section for showcasing trending or best-selling products.
- **Product Reviews and Ratings**:
  - View user reviews and average ratings for each product.
  - Submit reviews and rate products.

## Shopping Features

- **Cart System**:
  - Add, update, or remove items from the shopping cart.
  - Display cart summary with total price calculation.
- **Checkout Process**:
  - Secure payment integration using Stripe.
  - Provide shipping details during the checkout process.
  - Confirm order details before finalizing the purchase.

## Shop Management Features

- **Category Management**:
  - Browse products by category for easier navigation.
- **Multiple Shops**:
  - Access various shops and their respective products.

## Utility Features

- **Pagination**: Efficient handling of large product lists using pagination for better performance and usability.
- **Dynamic Banners**: Display promotional banners or special offers dynamically on the homepage.
- **Search Functionality**: Global search bar for locating products and shops.
- **Secure Routes**: Protect sensitive pages with authentication checks.

## Design and Styling Features

- **Tailwind CSS**: Leveraging utility-first CSS framework for consistent and modern design.
- **Reusable Components**: Modular and reusable React components for efficient development.

## Performance and Testing

- **Optimized Performance**:
  - Lazy loading and code splitting for faster load times.
  - Web performance monitoring using built-in React tools.
- **Testing**:
  - Unit tests for core functionality.
  - Setup test environment with `setupTests.js` for continuous quality assurance.

## Additional Features

- **Real-Time Chat**: Communicate with support or other users in real-time.
- **Order Tracking**: Track the status of placed orders.
- **Wishlist Management**: Save products for later using the wishlist functionality.


# Tech Stack Used

The client application is built using a modern and scalable tech stack to ensure high performance, maintainability, and a great user experience.

## Frontend

- **React.js**: JavaScript library for building user interfaces with reusable components.
- **Redux**: State management library for handling application-wide state.
- **Tailwind CSS**: Utility-first CSS framework for responsive and customizable designs.
- **HTML5 & CSS3**: For structuring and styling the application.
- **JavaScript (ES6+)**: Core programming language with modern features for interactive functionality.

## Backend (API Integration)

- **RESTful API**: Communicates with the backend server to fetch and manage data.
- **Axios**: HTTP client for making API requests.

## Authentication and Security

- **JWT (JSON Web Tokens)**: For secure user authentication and session management.
- **Protected Routes**: Ensures only authorized users can access specific areas of the application.

## Payment Gateway

- **Stripe**: Integrated for secure and seamless online payment processing.

## Development Tools

- **Node.js & npm**: Package manager and runtime environment for installing dependencies and running the development server.
- **Git**: Version control for managing codebase changes.
- **Visual Studio Code**: Preferred code editor for development.

## Testing and Performance

- **React Testing Library**: Utilities to test React components.
- **Web Vitals**: Tool for measuring and improving web performance.

## Deployment and Configuration

- **Vite/React Scripts**: Build tools for development and production builds.
- **Environment Variables**: Used for sensitive configurations like API keys and backend URLs.

## Styling and Responsiveness

- **CSS Modules**: For scoped and modular CSS styling.
- **Responsive Design**: Ensures compatibility across various screen sizes.

## Additional Libraries

- **React Router**: For managing navigation and routing in the application.
- **React Icons**: Library for embedding scalable vector icons.
- **React Stripe.js**: React wrapper for integrating Stripe payments.

This robust tech stack enables a fast, scalable, and user-friendly application while ensuring maintainability and security.


# Challenges and Lessons Learned

## Challenges

1. **State Management Complexity**: Managing a large state across multiple components using Redux required careful planning to avoid unnecessary re-renders.
2. **Payment Integration**: Implementing and testing secure payment functionality with Stripe required attention to detail to ensure a smooth user experience.
3. **API Error Handling**: Managing edge cases and error scenarios during API calls added extra layers of complexity.

## Lessons Learned

1. **Modular Design is Key**: Breaking down the application into reusable components simplified maintenance and scalability.
2. **Importance of Testing**: Incorporating unit and integration tests helped identify issues early and improved code reliability.
3. **Effective Communication with APIs**: Optimizing API requests and handling errors gracefully improved user experience and performance.
4. **Tailwind CSS Efficiency**: Leveraging utility classes from Tailwind CSS significantly sped up the design process while maintaining consistency.

These challenges not only enhanced our technical skills but also highlighted the importance of clean code, proper documentation, and thorough testing.


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

## File Structure

client/ 
├── node_modules/ # Project dependencies (auto-generated by npm/yarn) 
├── public/ # Static files like index.html and images 
├── src/ # Source code for the application 
│ ├── api/ # API-related configurations and utilities 
│ ├── assets/ # Static assets such as images, icons, or fonts 
│ ├── components/ # Reusable React components 
│ │ ├── dashboard/ # Components specific to the user dashboard 
│ │ │ ├── ChangePassword.jsx 
│ │ │ ├── Chat.jsx 
│ │ │ ├── Index.jsx 
│ │ │ ├── Order.jsx 
│ │ │ ├── Orders.jsx 
│ │ │ └── Wishlist.jsx 
│ │ ├── products/ # Components related to products 
│ │ │ ├── FeatureProducts.jsx 
│ │ │ ├── Products.jsx 
│ │ │ ├── ShopProducts.jsx 
│ │ │ ├── Banner.jsx 
│ │ │ ├── Categories.jsx 
│ │ │ ├── CheckoutForm.jsx 
│ │ │ ├── Footer.jsx 
│ │ │ ├── Headers.jsx 
│ │ │ ├── Pagination.jsx 
│ │ │ ├── Ratings.jsx 
│ │ │ ├── RatingTemp.jsx 
│ │ │ ├── Reviews.jsx 
│ │ │ └── Stripe.jsx 
│ ├── pages/ # Main application pages 
│ │ ├── Card.jsx 
│ │ ├── CategoryShop.jsx 
│ │ ├── ConfirmOrder.jsx 
│ │ ├── Dashboard.jsx 
│ │ ├── DealerData.js 
│ │ ├── Details.jsx 
│ │ ├── Home.jsx 
│ │ ├── Login.jsx 
│ │ ├── Payment.jsx 
│ │ ├── Register.jsx 
│ │ ├── SearchProducts.jsx 
│ │ ├── Shipping.jsx 
│ │ └── Shops.jsx 
│ ├── store/ # Redux store configuration 
│ │ ├── reducers/ # Reducer functions for state management 
│ │ │ ├── authReducer.js 
│ │ │ ├── cardReducer.js 
│ │ │ ├── chatReducer.js 
│ │ │ ├── dashboardReducer.js 
│ │ │ ├── homeReducer.js 
│ │ │ ├── orderReducer.js 
│ │ │ ├── rootReducer.js 
│ │ │ └── index.js 
│ ├── utils/ # Utility files and helpers 
│ │ ├── config.js # Configuration settings 
│ │ └── ProtectUser.jsx # User authentication and route protection 
│ ├── App.css # Global CSS styles 
│ ├── App.jsx # Main application entry point 
│ ├── App.test.js # Application test suite 
│ ├── index.css # Global CSS file 
│ ├── index.js # Root entry point for React 
│ ├── logo.svg # Project logo 
│ ├── reportWebVitals.js # Web performance measurement 
│ ├── setupTests.js # Test configuration setup 
├── .gitignore # Files and folders ignored by Git 
├── package.json # Project metadata and dependencies 
├── package-lock.json # Exact dependency versions for the project 
├── README.md # Project overview and documentation ├── tailwind.config.js # Tailwind CSS configuration
