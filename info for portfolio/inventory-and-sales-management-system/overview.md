# 📦 Inventory and Sales Management System

## 📋 Project Summary

The **Inventory and Sales Management System** is a robust, terminal-based Python application designed to streamline business operations. It tracks inventory levels, processes sales transactions, and features a unique "Restock Prediction" module to forecast when products will run out. This CLI tool provides an efficient, distraction-free environment for managing small business stock data.

---

## 🛠️ Tech Stack

| Layer          | Technologies                                  |
| :------------- | :-------------------------------------------- |
| **Language**   | Python 3                                      |
| **Interface**  | Command Line Interface (CLI)                  |
| **Storage**    | Local file storage (JSON/CSV)                 |
| **Data Logic** | Core Python data structures (Dicts, Lists)    |

---

## 🌟 Key Features

### 📊 Inventory Tracking
- **View Stock** — Display current inventory levels for all products.
- **Add/Update Items** — Easily add new products or update existing stock quantities.
- **Low Stock Alerts** — Highlights items that are running below minimum thresholds.

### 💰 Sales Processing
- **Record Sales** — Process customer transactions and automatically deduct sold quantities from inventory.
- **Revenue Calculation** — Calculate totals based on item prices and quantities sold.

### 🔮 Restock Prediction
- **Smart Forecasting** — Analyzes past sales velocity to predict when an item will go out of stock.
- **Restock Recommendations** — Suggests exact quantities to reorder based on predicted demand and lead times.

### 🖥️ CLI Interface
- **Clean Menu System** — Easy-to-use numbered menu for quick navigation.
- **Formatted Output** — Uses tabulated text for readable inventory and sales reports directly in the terminal.

---

## 🏗️ Architecture

```
inventory-and-sales-management-system/
├── main.py             # Main application loop and menu logic
├── inventory.py        # Inventory tracking modules
├── sales.py            # Transaction processing logic
├── prediction.py       # Restock forecasting algorithm
└── data/               # Directory containing persistent data files
```

---

## 📸 Screenshots

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_terminal_output.jpg` | High-quality mockup of the terminal interface showing the main inventory and sales menu. |

---

## 🎯 What I Did

- Built a **fully functional CLI business tool** using Python.
- Designed a **custom forecasting algorithm** to predict inventory depletion based on sales trends.
- Implemented **persistent data storage** allowing the system to maintain state between sessions.
- Created a **clean, modular codebase** separating core business logic (inventory, sales, prediction) into distinct modules.

---

## 📊 Project Metrics

- **3 Core Modules** — Inventory, Sales, Restock Prediction.
- **Terminal Native** — Designed specifically for fast, keyboard-only operation.
- **Predictive Analytics** — Integrates basic forecasting algorithms directly into the workflow.
