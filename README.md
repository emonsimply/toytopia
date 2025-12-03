# ToyTopia 🎈

A vibrant and playful online marketplace for kids' toys — built with **React**, **Firebase Authentication**, and **Tailwind CSS**. Parents can browse toys, view details, and enjoy a smooth, responsive user experience.

Live URL: **[https://toytopia-emonsimply.netlify.app/](https://toytopia-emonsimply.netlify.app/)**
GitHub Repo: **[https://github.com/emonsimply/toytopia](https://github.com/emonsimply/toytopia)**

---

## 📌 Project Overview

ToyTopia is a single‑page local kids' toy store platform where users can:

* Discover toys from various categories
* View detailed information about each toy
* Authenticate with Email/Password & Google
* Access private routes like **Toy Details** and **My Profile**
* Update profile using Firebase `updateProfile()`
* Reset forgotten passwords

The platform is designed with a **vibrant, kid‑friendly UI**, fully responsive layout, protected routes, and dynamic titles.

---

## ⭐ Key Features

### 🔐 Authentication

* Email/Password Login
* Google Login
* Register with Name, Email, Password, and Photo URL
* Password validation (uppercase, lowercase, min-length)
* Show/Hide password functionality
* Persistent login using Firebase `onAuthStateChanged`

### 🧸 Toys & Data

* Custom JSON data with minimum 6 popular toys
* Hosted toy images via `imgbb`/`postimg`
* Toy Details Page (Protected)
* Try Now Form with success alert

### 🧭 Routing System

* Protected Private Routes
* Redirect to login if not authenticated
* Does NOT redirect after reload due to Firebase auth persistence
* 404 Page
* Extra meaningful private route
* Dynamic Page Titles with `react-helmet`

### 🎨 UI / UX

* Fully responsive (Mobile, Tablet, Desktop)
* Colorful kid-friendly layout
* DaisyUI + TailwindCSS styling
* Swiper Slider / AOS Animations
* Navbar with active route indicators
* Footer with social links, privacy policy, terms

---

## 🛠️ Tech Stack

* **React 19** (SPA)
* **Vite** (Build tool)
* **Firebase 12** (Auth)
* **TailwindCSS 4 + DaisyUI** (UI)
* **React Router 7** (Routing)
* **SweetAlert2** (Alerts)
* **Swiper / AOS** (Animations)
* **Axios** (Data fetching)
* **React Helmet** (Dynamic titles)

---

## 📁 Project Structure

```
📦 toytopia
├── src
│   ├── assets
│   ├── components
│   ├── contexts  
│   ├── firebase 
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── index.css
│   └── main.jsx
├── public
├── .env.local
└── README.md
```

---

## 🔑 Environment Variables

Create a `.env` file at the project root:

```
VITE_apiKey=your_api_key
VITE_authDomain=your_authDomain
VITE_projectId=your_projectId
VITE_storageBucket=your_storageBucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

⚠️ Do NOT commit `.env` file.

---

## 🚀 Installation & Setup

```
# Clone the repository
git clone https://github.com/emonsimply/toytopia
cd toytopia

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📌 Features Implemented (Checklist)

* [x] Responsive layout
* [x] Firebase Authentication
* [x] Google Login
* [x] Protected routes
* [x] Dynamic titles
* [x] Try Now Form
* [x] Profile update using updateProfile()
* [x] Show/Hide password
* [x] Forget password + auto-filled email
* [x] Swiper / AOS included
* [x] 404 page
* [x] Hosted on Netlify
* [x] Minimum 10 meaningful GitHub commits
* [x] Custom JSON data with images

---

## 📸 Screenshots

*Add your project screenshots here (optional).*

---

## 📜 License

This project is created for **Assignment-09 (Orchid Category)** and is free for educational use.

---

## 🙋‍♂️ Author

**Foysal Islam Emon**

* GitHub: [https://github.com/emonsimply](https://github.com/emonsimply)
* Live Project: [https://toytopia-emonsimply.netlify.app/](https://toytopia-emonsimply.netlify.app/)


