# 🎴 YourYugiohProfits

<div align="center">

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.13.1-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

**The ultimate Yu-Gi-Oh! collection management platform for tracking, valuing, and profiting from your cards.**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## 📖 Overview

YourYugiohProfits is a comprehensive web application designed for Yu-Gi-Oh! collectors and traders who want to maximize their card collection's value. Track your cards, monitor real-time prices, receive price alerts, and get instant valuations—all in one beautiful, modern interface.

Whether you're a casual collector or a serious trader, this platform helps you make informed decisions about your collection with real-time market data and powerful analytics.

---

## ✨ Features

### 📚 Collection Management
- **Add & Organize Cards**: Search and add Yu-Gi-Oh! cards to your personal collection
- **Quantity Tracking**: Manage multiple copies of the same card
- **Visual Card Display**: Beautiful card previews with high-quality images
- **Collection Search**: Quickly find cards in your collection with instant search

### 💰 Real-Time Valuations
- **Instant Price Tracking**: Get up-to-date card prices from TCGPlayer
- **Total Collection Value**: See your entire collection's worth at a glance
- **Price Distribution Charts**: Visualize your collection's value distribution with interactive pie charts
- **Price Change Tracking**: Monitor price fluctuations and see percentage changes

### 📊 Analytics & Insights
- **Collection Statistics**: View total cards, collection value, and highest-value cards
- **Visual Analytics**: Interactive charts showing price tier distribution
- **Trend Analysis**: Track price changes over time

### 🔔 Smart Price Alerts
- **Custom Price Alerts**: Set target prices for specific cards
- **Email Notifications**: Get notified when your cards hit target prices
- **Alert Management**: Enable/disable alerts with a single click
- **Real-Time Monitoring**: 24/7 price monitoring for your collection

### 👤 User Authentication
- **Secure Login/Signup**: Protected user accounts with bcrypt encryption
- **Personal Collections**: Each user has their own private collection
- **Account Management**: Update profile and manage account settings

### 🎨 Beautiful Modern UI
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Eye-friendly dark mode with amber/gold accents
- **Smooth Animations**: Polished interactions and transitions
- **TailwindCSS Styling**: Modern, maintainable styling

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance like MongoDB Atlas)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/YourYugiohProfits.git
cd YourYugiohProfits
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### Step 4: Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### Step 5: Run the Application

**Option A: Run Both Frontend and Backend Together**

```bash
npm run start:all
```

**Option B: Run Separately**

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

---

## 💻 Usage

### Getting Started

1. **Sign Up**: Create a new account with username, email, and password
2. **Search Cards**: Use the search bar to find Yu-Gi-Oh! cards
3. **Add to Collection**: Click "Add To Collection" on any card
4. **View Valuations**: Navigate to the Valuation page to see your collection's worth
5. **Set Price Alerts**: Configure alerts for cards you're monitoring

### Key Features Guide

#### Adding Cards to Collection
- Search for cards by name in the "Add to Collection" page
- Click "Add To Collection" on any card result
- Your card will appear in your collection below

#### Managing Collection
- Use the search bar to filter your collection
- Adjust quantities with the `+` and `-` buttons
- View initial price vs. current price for each card

#### Setting Price Alerts
1. Navigate to your collection
2. Find a card you want to monitor
3. Enter a target price in the "Alert Price" field
4. Click "Set Price Alert"
5. Enable alerts using the toggle button
6. Receive email notifications when the price is reached

#### Viewing Valuations
- See your total collection value at the top
- View card count and distribution charts
- Identify your highest-value card
- Analyze price tier distribution

---

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library
- **Vite 6.1.0** - Lightning-fast build tool
- **TailwindCSS 4.1.16** - Utility-first CSS framework
- **React Router DOM 7.2.0** - Client-side routing
- **Chart.js 4.4.9** - Data visualization
- **React Chart.js 2** - React wrapper for Chart.js

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.21.2** - Web framework
- **MongoDB 8.13.1** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **bcrypt** - Password hashing
- **Nodemailer** - Email notifications
- **Node-cron** - Scheduled tasks

### APIs
- **YGOPRODECK API** - Yu-Gi-Oh! card data and prices

---

## 📁 Project Structure

```
YourYugiohProfits/
│
├── public/                    # Static assets
│   ├── logo.png              # Application logo
│   └── ...
│
├── src/                       # Frontend source code
│   ├── components/           # React components
│   │   ├── Account.jsx       # User account settings
│   │   ├── AddToCollection.jsx  # Card search & add
│   │   ├── AppNav.jsx        # App navigation
│   │   ├── Button.jsx        # Reusable button component
│   │   ├── Card.jsx          # Card display component
│   │   ├── CardSearchBar.jsx # Card search input
│   │   ├── CardSearchItem.jsx # Search result item
│   │   ├── CardSearchResult.jsx # Search results container
│   │   ├── Collection.jsx    # Collection display
│   │   ├── CollectionItem.jsx # Individual collection item
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Header.jsx        # Header with logo
│   │   ├── HeaderNav.jsx     # Header navigation
│   │   ├── Instructions.jsx  # User instructions
│   │   ├── LandingPage.jsx   # Home page
│   │   ├── LoginForm.jsx     # Login form
│   │   ├── Logo.jsx          # Logo component
│   │   ├── PageNotFound.jsx  # 404 page
│   │   ├── SignupForm.jsx    # Signup form
│   │   ├── Spinner.jsx       # Loading spinner
│   │   └── Valuations.jsx    # Valuation dashboard
│   │
│   ├── pages/                # Page components
│   │   ├── AppLayout.jsx     # App layout wrapper
│   │   ├── HomePage.jsx      # Home page wrapper
│   │   ├── LandingPage.jsx   # Landing page
│   │   ├── Login.jsx         # Login page
│   │   └── SignUp.jsx        # Signup page
│   │
│   ├── contextapi/           # React Context
│   │   └── AppContext.jsx    # Global app state
│   │
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
│
├── server/                   # Backend source code
│   ├── controllers/          # Route controllers
│   │   └── userController.js
│   ├── middleware/          # Express middleware
│   │   └── loginNotification.js
│   ├── models/              # MongoDB models
│   │   └── userModel.js
│   ├── routes/              # API routes
│   │   └── userRoutes.js
│   ├── utils/               # Utility functions
│   │   ├── email.js         # Email service
│   │   └── notifications.js # Notification service
│   ├── server.js            # Express server
│   └── index.js             # Server entry point
│
├── package.json             # Frontend dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

---

## 🔌 API Endpoints

### User Endpoints

- `POST /api/user` - Create new user account
- `POST /api/user/login` - User login
- `GET /api/user/:id` - Get user data
- `PUT /api/user/:id` - Update user data
- `DELETE /api/user/:id` - Delete user account

### Collection Endpoints

- `GET /api/user/:id/collection` - Get user's collection
- `POST /api/user/:id/collection` - Add card to collection
- `DELETE /api/user/:id/collection/:cardId` - Remove card from collection
- `PUT /api/user/:id/collection/:cardId` - Update card in collection

---

## 🎨 Design Philosophy

The application features a modern, dark-themed UI with amber/gold accents that reflect the premium nature of card collecting. The design emphasizes:

- **Clarity**: Easy-to-read information hierarchy
- **Performance**: Fast, responsive interactions
- **Accessibility**: Proper contrast and semantic HTML
- **User Experience**: Intuitive navigation and clear feedback

---

## 🧪 Development

### Available Scripts

**Frontend:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Backend:**
```bash
cd server
npm run dev          # Start with nodemon (auto-reload)
npm start            # Start production server
```

### Code Style

- ESLint configured for React best practices
- Consistent component structure
- TailwindCSS utility classes for styling
- Modular component architecture

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👤 Author

**YourYugiohProfits Team**

---

## 🙏 Acknowledgments

- [YGOPRODECK API](https://ygoprodeck.com/) - For providing comprehensive Yu-Gi-Oh! card data
- [TailwindCSS](https://tailwindcss.com/) - For the amazing utility-first CSS framework
- [React](https://react.dev/) - For the powerful UI library
- All contributors and users who help improve this project

---

## 📞 Support

If you encounter any issues or have questions, please:

1. Check existing [Issues](https://github.com/yourusername/YourYugiohProfits/issues)
2. Create a new issue with detailed information
3. Contact the development team

---

<div align="center">

**Made with ❤️ for Yu-Gi-Oh! collectors and traders**

⭐ Star this repo if you find it helpful!

</div>
