# 📦 Smart QR-Based Inventory & Sales Management System

## 📋 Project Summary

A complete Flask web application for inventory tracking, QR-based stock updates, QR-powered billing, dashboards, and PDF invoice generation. It features auto-generated QR codes for every product and allows mobile devices to use the camera directly for scanning.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                  |
| :----------- | :-------------------------------------------- |
| **Frontend** | HTML, CSS, Bootstrap, Chart.js                |
| **Backend**  | Python, Flask                                  |
| **Database** | SQLite                                         |
| **Vision**   | OpenCV, Pyzbar, qrcode                         |
| **Reporting**| ReportLab (PDF Generation)                     |

---

## 🌟 Key Features

- **QR-Powered Management**: Auto-generate QR codes for every product and download/print product QR labels.
- **Mobile-Friendly Scanning**: Update stock by scanning QR images from a phone camera directly.
- **Smart Checkout**: Sell products by scanning QR codes into a bill cart; auto-reduce stock after checkout.
- **Automated Invoicing**: Generate printable bills and downloadable PDF invoices.
- **Analytics Dashboard**: Dashboard analytics for inventory, sales, hourly revenue, and expected stock requirements.

---

## 📸 Screenshots (UI Mockups)

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `dashboard_mockup.png` | Analytics dashboard showing sales trends and stock alerts |
| 2 | `sales_qr_mockup.png` | Sales checkout process using QR code scanning |

---

## 🎯 What I Did

- Developed a full-stack Flask application with a SQLite database.
- Integrated OpenCV and Pyzbar for real-time QR code decoding and processing.
- Implemented a secure checkout system with session-based cart management.
- Built an analytics dashboard using Chart.js to visualize sales data.
- Automated the generation of professional PDF invoices using ReportLab.
