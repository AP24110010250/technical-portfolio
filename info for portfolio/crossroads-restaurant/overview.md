# 🍽️ Cross Roads Restaurant & Sweets — Vijayawada

## Live URL
🔗 [https://crossroadsrestaurants.netlify.app/](https://crossroadsrestaurants.netlify.app/)

---

## 📋 Project Summary

**Cross Roads Restaurant & Sweets** is a premium, full-stack web application built for a real restaurant chain in Vijayawada. The project delivers a visually stunning, animated, and fully responsive website with a complete backend API for menu management, gallery uploads, and admin operations. The site features scroll-triggered GSAP animations, smooth Lenis scrolling, and a Framer Motion-powered experience.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                                       |
| :----------- | :----------------------------------------------------------------- |
| **Frontend** | React 18, Vite, Tailwind CSS, Framer Motion, GSAP, Lenis, Lucide  |
| **Backend**  | Node.js, Express.js, MongoDB (Mongoose), Cloudinary, JWT, Bcrypt   |
| **Routing**  | React Router DOM                                                   |
| **HTTP**     | Axios                                                              |
| **Hosting**  | Frontend: Netlify · Backend: Cloud-hosted                          |

---

## 🌟 Key Features

### 🏠 Homepage
- **Animated Hero Section** — Full-screen video/image hero with a bold tagline and smooth entrance animations.
- **Timeline Section** — Interactive GSAP-animated timeline showcasing restaurant milestones (2016 → Present), with scroll-triggered reveal effects.
- **Menu Preview (Thali Showcase)** — Visually rich cards showing signature thali offerings with prices, animated on scroll.
- **Bestsellers Carousel** — Auto-scrolling cards featuring top dishes (Guntur Chicken, Paneer Butter Masala, Mutton Biryani, etc.) with Cloudinary-hosted images.
- **Tollywood Celebrity Wall** — Photo gallery of celebrity visits with parallax effects.
- **Confectionery Section** — Dedicated section showcasing sweets like Badam Burfi, Kaju Roll, and Dry Fruit Laddu.
- **Multi-Branch Info** — Displays branches (Labbipet, Ashok Nagar, Benz Circle) with addresses and details.
- **Table Reservation Form** — Live reservation form with date/time, guest count, and meal preference.
- **Footer** — Restaurant branding, contact, and social links.

### 🍛 Menu Page
- **Category-wise filtering** (Starters, Main Course, Biryani, Chinese, Desserts, etc.)
- **Beautiful product cards** with images hosted on Cloudinary
- **Price display** with INR formatting
- **Responsive grid layout**

### 📖 About Page
- **Restaurant history** and backstory with animated reveals
- **Mission & Values** section
- **Team/Chef spotlights**

### 🖼️ Gallery Page
- **Photo grid** with lightbox-style viewing
- **Masonry/grid layout** showcasing restaurant interiors, food photography, events

### 📞 Contact Page
- **Contact form** with name, email, phone, and message fields
- **Embedded Google Maps** showing restaurant locations
- **Branch addresses** and phone numbers

### 🔐 Admin Panel
- **JWT-authenticated admin dashboard** (85KB of code — feature-rich)
- **Menu CRUD** — Add, edit, delete menu items with image uploads to Cloudinary
- **Gallery management** — Upload and manage gallery photos
- **Reservation management** — View and manage incoming table reservations
- **Role-based access control**

---

## 🏗️ Architecture

```
crossroads/
├── crossroads_frontend/       # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/        # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── context/           # Auth context provider
│   │   ├── pages/             # Home, Menu, About, Gallery, Contact, Admin
│   │   ├── utils/             # API helpers
│   │   └── assets/            # Static images & icons
│   └── public/                # Favicons, SEO files
│
└── ccrossroads_backend/       # Node.js + Express API
    ├── controllers/           # Route handlers
    ├── models/                # Mongoose schemas (MenuItem, Gallery, Reservation)
    ├── routes/                # Express routes
    ├── middleware/             # Auth & upload middleware
    ├── config/                # DB & Cloudinary config
    ├── seed.js                # Demo data seeder
    └── server.js              # Entry point
```

---

## 📸 Screenshots

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_homepage_hero.png` | Full-screen hero with restaurant branding |
| 2 | `02_homepage_sections_1.png` | Timeline & milestone animations |
| 3 | `03_homepage_sections_2.png` | Thali showcase & menu preview |
| 4 | `04_homepage_sections_3.png` | Bestseller dishes carousel |
| 5 | `05_homepage_sections_4.png` | Celebrity wall & branches |
| 6 | `06_homepage_sections_5.png` | Confectionery section |
| 7 | `07_homepage_footer.png` | Reservation form & footer |
| 8 | `08_menu_page.png` | Menu with category filters |
| 9 | `09_menu_page_2.png` | Menu items grid (scrolled) |
| 10 | `10_about_page.png` | About page hero |
| 11 | `11_about_page_2.png` | About page content |
| 12 | `12_gallery_page.png` | Photo gallery grid |
| 13 | `13_gallery_page_2.png` | Gallery (scrolled) |
| 14 | `14_contact_page.png` | Contact form & map |
| 15 | `15_contact_page_2.png` | Contact details & footer |

---

## 🎯 What I Did

- Designed and developed the **complete frontend** with React, integrating scroll-based GSAP animations and smooth Lenis scrolling for a premium restaurant experience.
- Built a **full-featured REST API** with Express.js, MongoDB, and Cloudinary for menu management, gallery uploads, and reservation handling.
- Implemented **JWT-based authentication** for a secure admin panel with CRUD operations.
- Deployed the frontend on **Netlify** with CI/CD.
- Optimized images via **Cloudinary CDN** for fast page loads.

---

## 📊 Project Metrics

- **6 Pages** — Home, Menu, About, Gallery, Contact, Admin
- **15+ Animated Sections** — GSAP + Framer Motion scroll-triggered animations
- **Full Admin Dashboard** — 85KB of admin code for complete restaurant management
- **Responsive Design** — Works seamlessly on mobile, tablet, and desktop
