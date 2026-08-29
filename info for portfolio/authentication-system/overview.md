# 🔐 Secure CLI Authentication System

## 📋 Project Summary

**Secure CLI Authentication System** is a lightweight, terminal-based user authentication application built in C++. It simulates a real-world authentication workflow, featuring account creation, secure login, password management, and account deletion. Data is persistently stored using a flat-file database approach, making it an excellent demonstration of foundational security concepts and file I/O operations in C++.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                                       |
| :----------- | :----------------------------------------------------------------- |
| **Language** | C++ (Standard Template Library)                                    |
| **Storage**  | File-based storage (`users.db` flat file)                          |
| **Interface**| Command Line Interface (CLI)                                       |
| **Security** | Basic string obfuscation / validation algorithms                   |

---

## 🌟 Key Features

### 👤 Account Management
- **Create Account** — Register a new user with a unique username and password.
- **Persistent Storage** — Saves user credentials to a local text-based database file (`users.db`).
- **Input Validation** — Prevents duplicate usernames during registration.

### 🔑 Authentication Workflow
- **Secure Login** — Validates entered credentials against stored records.
- **Session Simulation** — Grants access to the "system" upon successful verification.

### ⚙️ Account Security
- **Change Password** — Allows authenticated users to securely update their passwords.
- **Delete Account** — Completely removes user records from the system database.

### 🖥️ CLI Interface
- **Menu-driven UI** — Clean, text-based navigation menu for executing actions.
- **Error Handling** — Clear feedback for invalid inputs, wrong passwords, or non-existent users.

---

## 🏗️ Architecture

```
authentication-system/
├── main.cpp            # Entry point & Menu loop
├── auth.cpp / auth.h   # Authentication logic & file parsing
├── changepass.cpp      # Password update module
├── deleteacc.cpp       # Account deletion module
├── functions.cpp       # Utility functions & helpers
├── users.db            # Local text database file
└── command.txt         # Build/execution commands
```

---

## 📸 Screenshots

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_terminal_output.jpg` | High-quality mockup of the terminal interface showing the main authentication menu. |

---

## 🎯 What I Did

- Developed a **complete terminal-based application** using C++ and the STL.
- Implemented **custom file I/O handling** to persistently store, read, update, and delete user records.
- Designed a **modular codebase**, separating authentication, password management, and account deletion into distinct source files.
- Built a **robust command-line menu system** with error handling to prevent application crashes on bad user input.

---

## 📊 Project Metrics

- **100% C++ Implementation** — Built entirely with standard libraries (no external frameworks).
- **CRUD Operations** — Implements full Create, Read, Update, Delete flow for user data.
- **Modular Design** — Separated header and implementation files for clean code organization.
