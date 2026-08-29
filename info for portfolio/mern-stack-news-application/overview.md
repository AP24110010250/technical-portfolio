# 📰 MERN Stack News Application

## 📋 Project Summary

A full-stack, responsive news platform built with the MERN stack (MongoDB, Express, React, Node.js). It features a dynamic article feed, live India headlines via NewsData.io, user and admin authentication, and a "Watch Later" saving functionality. 

---

## 🛠️ Tech Stack

| Layer        | Technologies                                  |
| :----------- | :-------------------------------------------- |
| **Frontend** | React, CSS                                    |
| **Backend**  | Node.js, Express                              |
| **Database** | MongoDB, Mongoose                             |
| **Auth**     | JWT (JSON Web Tokens)                         |
| **External API**| NewsData.io                                  |

---

## 🌟 Key Features

- **Live Article Feed**: Featured stories, categories, and search functionality with a fallback to local sample data if offline.
- **Real-Time Headlines**: Integration with NewsData.io for fetching live India headlines.
- **Secure Authentication**: User and admin authentication with JWT sessions. Admin-only access for article publishing.
- **Watch Later**: Authenticated users can save articles to their personal reading list.
- **Content Management**: Dedicated publish form for admins to add new stories to the MongoDB database.
- **Account Recovery**: Forgot-password reset links with optional SMTP email delivery.

---

## 📸 Screenshots (UI Mockups)

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `news_homepage.png` | Modern news application homepage with featured articles and category navigation |
| 2 | `article_reader.png` | Clean, distraction-free article reading experience |

---

## 🎯 What I Did

- Architected a complete MERN stack application with a robust REST API.
- Implemented secure JWT-based authentication with role-based access control (Admin vs. User).
- Integrated third-party APIs (NewsData.io) with graceful fallbacks to a MongoDB database.
- Built a responsive React frontend for browsing, reading, and managing news articles.
- Developed a database seeding script for quick local setup and testing.
