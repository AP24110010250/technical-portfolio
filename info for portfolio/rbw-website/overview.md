# 🎨 Rajyalaxmi Binding Works (RBW) — B2B Wholesale E-Commerce Platform

## Live URL
🔗 [https://rbwfrontend.vercel.app/](https://rbwfrontend.vercel.app/)

---

## 📋 Project Summary

**Rajyalaxmi Binding Works (RBW)** is a production-grade, full-stack B2B wholesale e-commerce platform built for a real business that sells wedding invitations, cards, and binding products. The platform features a complete shopping workflow — product catalog, cart, Razorpay payment integration, order tracking, push notifications, and a comprehensive admin dashboard. This is a real-world, deployed application serving actual customers.

---

## 🛠️ Tech Stack

| Layer             | Technologies                                                                  |
| :---------------- | :---------------------------------------------------------------------------- |
| **Frontend**      | React 18, Vite, Tailwind CSS, Framer Motion, QRCode.react, Lucide            |
| **Backend**       | Node.js, Express.js, MongoDB (Mongoose), JWT, Bcrypt                          |
| **Payments**      | Razorpay SDK — Order creation + HMAC SHA256 signature verification            |
| **Media**         | Cloudinary (via Multer + multer-storage-cloudinary)                           |
| **Notifications** | Web Push (VAPID keys, Service Workers)                                        |
| **PDF**           | PDFKit — Server-side invoice generation                                       |
| **Email**         | Nodemailer — OTP-based password reset, order confirmations                    |
| **Security**      | Helmet, express-rate-limit, mongo-sanitize                                    |
| **State**         | React Context API (AuthContext, CartContext)                                   |
| **Hosting**       | Frontend: Vercel · Backend: Cloud-hosted                                      |

---

## 🌟 Key Features

### 🏠 Homepage
- **Hero banner** with promotional slides and call-to-action buttons
- **Featured product categories** — Wedding Invitations, Cards, Binding Products
- **Testimonials section** from real customers
- **Announcement/Updates feed** for new product arrivals

### 🛍️ Shop / Product Catalog
- **Category filtering** — Browse by product categories
- **Search functionality** — Quick product search
- **Product grid** with images, prices, and quick-add to cart
- **Responsive design** with smooth Framer Motion transitions

### 📦 Product Details Page
- **High-quality product images** hosted on Cloudinary
- **Detailed descriptions**, pricing, and stock info
- **Add to cart** with quantity selection
- **Related products** section
- **Customer reviews** and ratings

### 🛒 Cart & Checkout
- **Dynamic cart** powered by React Context (CartContext)
- **Quantity adjustment** and item removal
- **Price calculations** with subtotals and totals
- **Razorpay Checkout** integration for secure payments
- **Order confirmation** with downloadable PDF invoices
- **Dynamic QR codes** generated on order details

### 👤 Authentication System
- **User registration** and login with JWT tokens
- **OTP-based password reset** via email (Nodemailer)
- **Role-based access** — Customer vs Admin
- **Persistent sessions** with HTTP-only cookies

### 📋 Order Management
- **Order history** — View past and ongoing orders
- **Order status tracking** — Placed, Processing, Shipped, Delivered
- **Push notifications** for order status changes (via Service Workers + VAPID)

### 🔐 Admin Dashboard
- **Product management** — Add, edit, delete products with Cloudinary image uploads
- **Category management** — Create and manage product categories
- **Order management** — View, update order statuses, shipping details
- **User management** — View registered users
- **Analytics overview** — Sales summaries and order counts
- **Push notification broadcast** — Send announcements to subscribers

### 🔒 Security Features
- **Helmet** — HTTP header hardening
- **Rate limiting** — Brute-force protection on auth endpoints
- **Mongo Sanitize** — NoSQL injection prevention
- **HMAC verification** — Razorpay payment signature validation

---

## 🏗️ Architecture

```
rbwfinalwebsite/
├── frontend/                   # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/         # Navbar, Footer, Banners, Cards
│   │   ├── context/            # AuthContext, CartContext
│   │   ├── hooks/              # useAuth, useCart
│   │   ├── layouts/            # MainLayout, AuthLayout, AdminLayout
│   │   ├── pages/              # Home, Shop, Checkout, Cart, Admin, Orders
│   │   │   └── admin/          # Admin sub-pages
│   │   ├── services/           # Axios API client
│   │   └── utils/              # Helpers, Web Push manager
│   └── public/                 # Logo, favicon, service worker
│
└── backend/                    # Node.js + Express API
    ├── config/                 # DB, Cloudinary, Email, Push configs
    ├── controllers/            # Auth, Order, Product, Admin, Push controllers
    ├── middleware/              # Auth, RBAC, Rate limiters, Error handlers
    ├── models/                 # User, Product, Order, Category schemas
    ├── routes/                 # Express API routes
    ├── scripts/                # Database migration scripts
    ├── utils/                  # Token gen, PDF generator, Web Push helpers
    └── server.js               # Entry point
```

---

## 🔌 API Endpoints

| Endpoint                    | Method   | Access    | Description                         |
| :-------------------------- | :------- | :-------- | :---------------------------------- |
| `/api/auth/register`        | `POST`   | Public    | Register new customer               |
| `/api/auth/login`           | `POST`   | Public    | Authenticate user & issue JWT       |
| `/api/products`             | `GET`    | Public    | Fetch catalog products              |
| `/api/categories`           | `GET`    | Public    | Fetch product categories            |
| `/api/orders`               | `POST`   | Customer  | Place order & create Razorpay order |
| `/api/orders/verify`        | `POST`   | Customer  | Verify Razorpay payment signature   |
| `/api/admin/*`              | `ALL`    | Admin     | Product, order & user management    |
| `/api/push/subscribe`       | `POST`   | Public    | Register Web Push subscription      |

---

## 📸 Screenshots

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_homepage_hero.png` | Homepage hero with product banners |
| 2 | `02_homepage_content.png` | Featured categories & products |
| 3 | `03_homepage_content_2.png` | Testimonials & announcements |
| 4 | `04_shop_page.png` | Product catalog grid |
| 5 | `05_shop_page_2.png` | Product listing (scrolled) |
| 6 | `06_product_details.png` | Product detail page |
| 7 | `07_contact_page.png` | Contact page with form |
| 8 | `08_login_page.png` | Login/Authentication page |

---

## 🎯 What I Did

- Designed and developed a **complete B2B e-commerce platform** from scratch — frontend to backend to deployment.
- Integrated **Razorpay payment gateway** with cryptographic HMAC signature verification for secure transactions.
- Built a **real-time Web Push notification system** using VAPID keys and Service Workers for order status updates.
- Implemented **PDF invoice generation** server-side using PDFKit.
- Set up **Cloudinary media pipeline** for scalable product image hosting.
- Applied **enterprise-grade security** — Helmet, rate limiting, mongo sanitization, JWT auth.
- Deployed frontend on **Vercel** and backend on a cloud platform with CI/CD.

---

## 📊 Project Metrics

- **14+ Page Views** — Home, Shop, Product Details, Cart, Checkout, Orders, Login, Signup, Contact, Admin Dashboard, etc.
- **8 API Route Groups** — Auth, Products, Categories, Orders, Admin, Push, Saved Articles
- **Payment Integration** — Full Razorpay checkout flow with verification
- **Real Users** — Deployed and serving actual B2B wholesale customers
