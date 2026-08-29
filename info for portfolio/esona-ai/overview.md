# 🧠 Esona AI — The Sound of Understanding

## 📋 Project Summary

**Esona AI** is an AI-powered emotional wellness web application that acts as a personal mental health companion. Users can record their voice or upload audio files, and Esona analyzes the tone, pitch, and energy to generate personalized mood reports, calming suggestions, and music recommendations. It also includes a fully functional AI chatbot powered by OpenAI for empathetic conversations.

---

## 🛠️ Tech Stack

| Layer             | Technologies                                                      |
| :---------------- | :---------------------------------------------------------------- |
| **Frontend**      | React 18, TypeScript, Vite, Tailwind CSS, Lucide React            |
| **Backend**       | Node.js, Express.js (Proxy Server)                                |
| **AI Engine**     | OpenAI GPT API (via secure proxy)                                 |
| **Database**      | Supabase (PostgreSQL + Auth + Storage)                            |
| **Media APIs**    | YouTube Data API v3 — Mood-based music recommendations            |
| **Audio**         | Web Audio API (MediaRecorder) — Browser-based voice recording     |

---

## 🌟 Key Features

### 🏠 Homepage
- Clean, calming teal-to-cyan gradient design
- Large "Esona" branding with tagline *"💬 The Sound of Understanding"*
- White welcome card explaining the app's purpose
- Three colorful action buttons:
  - **Start Talking** (teal) — Navigate to recording
  - **View Mood Report** (blue) — View mood history
  - **Get Calming Suggestions** (cyan) — Personalized relaxation tips
- Floating chat button on all pages for quick AI access

### 🎤 Recording Hub
- **Live voice recording** using browser's MediaRecorder API
- Large animated microphone button with recording timer
- **Audio file upload** option for pre-recorded voice notes
- Example conversation topics to guide users
- Processing state with spinner animation
- Automatic mood analysis after recording stops

### 📊 Mood Report
- AI-analyzed mood results displayed in a clean card:
  - **Mood Type** (e.g., "Energetic and positive", "Calm but slightly anxious")
  - **Mood Score** (0–100 scale with color-coded badges)
  - **Energy Level** (High / Medium / Low)
  - **AI Insight** — Personalized analysis text
- Action buttons: Get Calming Suggestions, Play Relaxing Music, Talk Again
- Mood data persisted in Supabase for historical tracking

### 💡 Calming Suggestions
- **2×2 grid of wellness cards** with interactive hover effects:
  - 🌬️ **Breathing exercise** (blue card)
  - 🎵 **Instrumental music** (purple card)
  - ✏️ **Gratitude journaling** (teal card)
  - ☀️ **Walk/Stretch** (orange card)
- Bonus daily wellness tip
- Links to "Talk Again" and "View Mood History"

### 💬 AI Chatbot
- **OpenAI-powered conversational AI** with empathetic personality
- System prompt ensures warm, judgment-free responses
- Chat UI with user/bot message bubbles
- Real-time loading indicator ("Esona is thinking...")
- Safety guardrails for self-harm detection
- Accessible via floating chat button from any page

### 📜 Mood History
- **Chronological list** of all past mood recordings
- Each entry shows mood type, score, energy level, and timestamp
- Click any entry to view its full report
- Data stored securely in Supabase

### ℹ️ About Page
- Explains Esona's mission, how it works, and privacy approach

---

## 🏗️ Architecture

```
esona-ai/
├── src/                        # React + TypeScript Frontend
│   ├── components/
│   │   ├── HomePage.tsx        # Landing page with navigation
│   │   ├── RecordPage.tsx      # Voice recording & upload
│   │   ├── ReportPage.tsx      # Mood analysis results
│   │   ├── SuggestionsPage.tsx # Wellness recommendations
│   │   ├── ChatBotPage.tsx     # AI chatbot interface
│   │   ├── HistoryPage.tsx     # Past mood records
│   │   └── AboutPage.tsx       # About the app
│   ├── lib/
│   │   └── supabase.ts         # Supabase client config
│   ├── App.tsx                 # Main app with page routing
│   └── main.tsx                # Entry point
│
├── server/                     # Express Proxy Server
│   └── server.js               # Proxies OpenAI requests securely
│
├── tailwind.config.js          # Tailwind configuration
└── vite.config.ts              # Vite build config
```

---

## 🔄 User Workflow

```
User opens app → Homepage
    ↓
Clicks "Start Talking" → Recording Page
    ↓
Records voice (or uploads audio) → AI analyzes mood
    ↓
Mood Report generated → Score, Type, Energy, Insight
    ↓
User can:
  → Get Calming Suggestions (breathing, music, journaling)
  → Play Mood-based Music (YouTube API)
  → Talk Again (new recording)
  → Open AI Chatbot (floating button)
  → View Mood History (past records)
```

---

## 📸 Screenshots (UI Mockups)

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_homepage.jpg` | Homepage with action buttons |
| 2 | `02_recording_page.jpg` | Voice recording interface |
| 3 | `03_mood_report.jpg` | Mood analysis results |
| 4 | `04_suggestions_page.jpg` | Wellness suggestion cards |
| 5 | `05_chatbot_page.jpg` | AI chatbot conversation |

---

## 🎯 What I Did

- Built a **full-stack AI wellness application** using React, TypeScript, and Supabase.
- Integrated **OpenAI GPT API** via a secure Node.js proxy server for empathetic AI conversations.
- Implemented **browser-based voice recording** using the MediaRecorder API.
- Built a **mood analysis pipeline** that generates personalized scores, insights, and music recommendations.
- Integrated **YouTube Data API** for mood-based music suggestions.
- Used **Supabase** for real-time database storage, authentication, and user management.
- Designed a **calming, accessible UI** with Tailwind CSS and Lucide icons.

---

## 📊 Project Metrics

- **7 Page Views** — Home, Record, Report, Suggestions, Chat, History, About
- **AI Integration** — OpenAI GPT for empathetic chatbot
- **Voice Processing** — Browser-based audio recording & upload
- **Data Persistence** — Supabase PostgreSQL for mood history
- **API Integration** — YouTube Data API for music recommendations
