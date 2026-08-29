# 🦁 Jambavan — Lost Skill Reviver

## 📋 Project Summary

**Jambavan** (named after the mythological bear king who reminded Hanuman of his forgotten powers) is an AI-powered web application that helps users revive skills they once learned but abandoned over time. Users describe their forgotten skill, how long it's been, and why they want to regain it — and Jambavan generates a personalized, emotionally motivating **7-day revival plan** using Groq's large language models. The interface features a dark, warm, mythological aesthetic with glassmorphism cards and animated progress tracking.

---

## 🛠️ Tech Stack

| Layer        | Technologies                                  |
| :----------- | :-------------------------------------------- |
| **Frontend** | HTML, CSS (Glassmorphism), JavaScript          |
| **Backend**  | Python, Flask                                  |
| **AI**       | Groq API (LLaMA 3.3 70B Versatile Model)      |
| **Hosting**  | Render                                         |

---

## 🌟 Key Features

### 📝 Skill Input Form
- **Dark glassmorphism card** with frosted glass effect (backdrop-filter blur)
- Form fields:
  - **"Skill you once knew"** — Free text (e.g., Coding, Guitar, Drawing)
  - **"How long has it been?"** — Number + custom dropdown (Months / Years)
  - **"How did you learn it earlier?"** — Custom dropdown with smooth animation:
    - YouTube / Online
    - Book / PDF
    - Course / Coaching
    - Self Practice
  - **"Resource link or book name"** — Optional
  - **"Why do you want to regain it?"** — Free text (Career / Confidence / Passion)
- **"Begin the reminder"** button — Vibrant red (#d9381e) with glowing shadow
- Custom-built dropdown selectors (no native selects) with dark styling

### 🗓️ 7-Day Revival Plan (AI-Generated)
- **Groq LLaMA 3.3 70B** generates a structured JSON response with 7 days
- Each day card includes:
  - **Gada (Mace) SVG icon** — Gray when incomplete, glowing red when completed
  - **Day title** (e.g., "Day 1: Recall the First Spark")
  - **Emotional motivational message** — Calm, ancient-guide tone
  - **Practical action step** — Specific task for the day
  - **"Mark today complete" button** — Triggers gada glow animation

### ✅ Progress Tracking
- **Sequential day reveals** — Each day card appears only after the previous is completed
- **Gada animation** — SVG mace scales up and glows red on completion
- **Fade-in animations** — New day cards slide in with CSS keyframes
- **Completion reward** — After all 7 days: 👑 crown emoji with *"Your power was never lost."*

---

## 🎨 Design & Aesthetics

- **Background**: Dark radial gradient (`#2a2522` → `#0f0d0c`) — warm, ancient feel
- **Cards**: Glassmorphism with `rgba(255,255,255,0.06)` + `backdrop-filter: blur(14px)`
- **Accent color**: Vibrant red `#d9381e` — buttons, focus states, completed gadas
- **Typography**: System font stack (Apple system fonts, Segoe UI)
- **Inputs**: Translucent dark backgrounds with white text
- **Focus states**: Red border + red glow shadow on focus
- **Animations**: CSS `@keyframes fadeIn` for card reveals, CSS transitions for gada scaling

---

## 🏗️ Architecture

```
jambavan/
├── app.py              # Flask backend + Groq AI integration
├── requirements.txt    # Python dependencies (Flask, Groq, python-dotenv)
├── templates/
│   └── index.html      # Single-page HTML with form + results area
├── static/
│   ├── style.css       # Dark glassmorphism theme (328 lines)
│   └── script.js       # Form handling, day rendering, progress logic
└── README.md           # Documentation
```

---

## 🔄 User Workflow

```
User opens app → Dark themed form appears
    ↓
Fills in: Skill, Duration, Learning Source, Resource, Reason
    ↓
Clicks "Begin the reminder"
    ↓
Loading state: "Consulting ancient memory…"
    ↓
Groq AI generates 7-day plan (LLaMA 3.3 70B)
    ↓
Day 1 card appears with Gada icon + motivational message + action step
    ↓
User clicks "Mark today complete" → Gada glows red → Day 2 appears
    ↓
... repeat for 7 days ...
    ↓
All days completed → 👑 "Your power was never lost."
```

---

## 🤖 AI Prompt Engineering

The AI is prompted to act as **JAMBAVAN** — "a calm, ancient guide who reminds people of forgotten strength." Key prompt rules:
- Respond **ONLY in valid JSON** (no markdown, no extra text)
- Use an **emotional, calm, motivational tone**
- Each day must feel like a **reminder, not teaching**
- Output format: `{ "days": [{ "day": 1, "title": "...", "message": "...", "action": "..." }] }`

Model: **LLaMA 3.3 70B Versatile** via Groq API (temperature: 0.7)

---

## 📸 Screenshots (UI Mockups)

| # | Screenshot | Description |
|---|-----------|-------------|
| 1 | `01_input_form.jpg` | Dark glassmorphism form with skill inputs |
| 2 | `02_revival_plan.jpg` | 7-day revival plan with gada progress icons |

---

## 🎯 What I Did

- Designed a **unique, emotionally resonant** web application inspired by Indian mythology (Jambavan reminding Hanuman of his powers).
- Built a **Flask backend** that integrates with Groq's AI API to generate structured 7-day revival plans.
- Crafted a **dark glassmorphism UI** from scratch with pure CSS — no frameworks.
- Implemented **custom dropdown selectors** with smooth CSS animations (no native `<select>` elements).
- Built a **sequential day-reveal system** with animated Gada (mace) progress indicators in SVG.
- Engineered precise **AI prompts** to ensure consistent JSON output with motivational content.

---

## 📊 Project Metrics

- **Single-page app** with dynamic content rendering
- **AI-powered** — Groq LLaMA 3.3 70B for plan generation
- **Custom UI** — Hand-coded glassmorphism + SVG animations
- **Zero dependencies** — Pure HTML/CSS/JS frontend (no React, no Tailwind)
- **7-day gamified experience** with visual progress tracking
