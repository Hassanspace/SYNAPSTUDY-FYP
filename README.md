<div align="center">

  # 🎓 SynapStudy
  ### Reimagining Education with AI-Driven Classroom Intelligence & Automated Exam Engineering

  [![Python](https://img.shields.io/badge/Python-3.11%2B-blue.svg?logo=python&logoColor=white)](https://python.org)
  [![Django](https://img.shields.io/badge/Backend-Django_5.0_REST-092E20.svg?logo=django&logoColor=white)](https://djangoproject.com)
  [![React](https://img.shields.io/badge/Frontend-React_19_|_Vite-61DAFB.svg?logo=react&logoColor=black)](https://react.dev)
  [![OpenAI](https://img.shields.io/badge/AI Engine-OpenAI_GPT--4-412991.svg?logo=openai&logoColor=white)](https://openai.com)
  [![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1.svg?logo=postgresql&logoColor=white)](https://postgresql.org)
  [![COMSATS](https://img.shields.io/badge/COMSATS_University-Final_Year_Project-003366.svg)](#academic-metadata)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

  <br />

  <p align="center">
    <b>SynapStudy</b> is an end-to-end, production-grade AI learning management platform that unites educators and students. It eliminates administrative friction by automating exam creation, anti-cheat variant generation, rubric grading, RAG PDF document Q&A, active recall flashcards, and concept tree mapping.
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-system-architecture">System Architecture</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-api-documentation">API Specs</a> •
    <a href="#-academic-metadata">Academic Metadata</a>
  </p>

  ---
</div>

<br />

## 📌 Executive Summary

Traditional Learning Management Systems (LMS) remain static repositories of files. Instructors waste over 15 hours weekly manually creating quizzes, assembling exam variants, and grading assignments, while students suffer from delayed feedback and passive study habits.

**SynapStudy** transforms classrooms into intelligent ecosystems:
- **For Educators**: Converts course syllabus PDFs into multi-variant formal exams in under 60 seconds, provides an automated anti-cheat set generator, and evaluates student submissions using custom rubric auto-graders.
- **For Students**: Delivers context-grounded RAG Q&A with lecture notes, auto-generates 3D active recall flashcard decks, visualizes interconnected concepts via Mind Palace knowledge trees, and synchronizes virtual bookshelves with Google Drive.

---

## 🔥 Key Features

### 👨‍🏫 1. Educator Engineering Suite
* **📄 Instant PDF-to-Exam Generator**: Upload syllabus documents or lecture slides to automatically generate formal quizzes containing Multiple Choice Questions (MCQs), short answers, and long written prompts with configurable difficulty controls (`Easy`, `Moderate`, `Hard`).
* **🛡️ Anti-Cheat N-Variant Set Engine**: Algorithmic question permutation engine (`FormalQuizSet`) that outputs $N$ unique, non-identical exam variants per classroom session to eliminate student collusion during online exams.
* **✍️ Rubric Auto-Grader**: AI evaluation pipeline that analyzes written code and text submissions against multi-criteria grading rubrics, generating structured feedback and score breakdowns.
* **📬 Styled Email Dispatch**: Instant classroom-wide notification engine powered by customizable HTML email templates.

### 🎓 2. Student AI Study Studio
* **💬 RAG PDF Assistant**: Retrieval-Augmented Generation Q&A bot grounded directly in uploaded PDFs, slides, and textbooks with zero-hallucination guardrails.
* **🃏 Active Recall Flashcard Deck**: Instant flashcard generation from course documents with interactive 3D flip card animations and spaced repetition tracking.
* **🕸️ Mind Palace Knowledge Graph**: Visual hierarchical concept trees mapping complex relationships between course topics for structural comprehension.
* **📚 Physical Shelf Library**: 3D-inspired virtual bookshelf UI integrated directly with Google Drive API for organizing cloud study materials.
* **🔥 Gamified Mastery**: XP progression system, daily study streaks, classroom leaderboards, and subscription tier guardrails.

---

## 🏗️ System Architecture

```text
[ React 19 + Vite Frontend ]
           │
           │ HTTP / REST APIs (JSON)
           ▼
[ Django REST Framework Gateway ]
    ├── Authentication & JWT Security
    ├── Classroom Management Module
    ├── Formal Quiz & Anti-Cheat Engine
    └── RAG Vector Search & Prompt Pipelines
           │
     ┌─────┴─────────────────────────────┬─────────────────────────────┐
     ▼                                   ▼                             ▼
[ PostgreSQL / SQLite ]       [ OpenAI GPT-4 API ]           [ Google Drive API ]
(User, Quiz & Class DB)       (RAG Q&A & Quiz Generation)   (Virtual Bookshelf Sync)
```

---

## 💻 Tech Stack

### **Backend Core**
- **Language**: Python 3.11+
- **Framework**: Django 5.0 / Django REST Framework (DRF)
- **Database**: PostgreSQL / SQLite (Development)
- **Authentication**: SimpleJWT / Django Auth System
- **PDF Extraction**: `PyPDF2`, `pdfplumber`

### **Frontend Interface**
- **Framework**: React 19, Vite
- **Styling**: Modern Glassmorphic CSS3, Vanilla CSS Design System, Tailwind Utilities
- **Icons**: Lucide Icons
- **HTTP Client**: Axios / Fetch API

### **AI & Third-Party Integrations**
- **LLM Provider**: OpenAI GPT-4 API (JSON Schema Enforcement)
- **Vector Search**: Custom RAG Text Chunking & Embeddings Engine
- **Cloud Storage**: Google Drive API v3

---

## 📁 Repository Directory Structure

```text
FYP/
├── SynapStudy/
│   ├── synap_backend/                  # Django REST API Backend
│   │   ├── ai_assistant/               # Core AI Engine (Quiz, RAG Chat, Flashcards)
│   │   │   ├── models.py               # FormalQuiz, FormalQuizSet, Flashcard Models
│   │   │   ├── views.py                # AI Generation & Chat API Viewsets
│   │   │   └── urls.py                 # Endpoint Routing
│   │   ├── classroom/                  # Classroom & Student Management
│   │   ├── users/                      # Custom User Authentication & Roles
│   │   ├── manage.py                   # Django Management Script
│   │   └── synap_backend/              # Core Settings & WSGI Configuration
│   │
│   └── synap_frontend/                 # React 19 Frontend Web Application
│       ├── src/
│       │   ├── components/             # Reusable UI Components & Mac Windows
│       │   ├── pages/                  # Dashboard, Quiz Workspace, Shelf Library
│       │   └── services/               # API Integration Services
│       └── package.json
│
├── assets/                             # Product Demo Screenshots & Hero Mockups
├── slides/                             # 16 High-Res PDF Carousel PNG Slides
└── README.md                           # Project Documentation
```

---

## ⚡ Getting Started & Local Setup

### Prerequisites
- **Python**: `v3.11` or higher
- **Node.js**: `v18.0` or higher
- **Git**: Installed on your system
- **OpenAI API Key**: Active API key from OpenAI Platform

---

### 1. Backend Setup (Django REST Framework)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/SynapStudy.git
   cd SynapStudy/FYP/SynapStudy/synap_backend
   ```

2. **Create and activate a virtual environment**:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # Linux/macOS
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install backend dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up Environment Variables**:
   Create a `.env` file in `synap_backend/`:
   ```ini
   SECRET_KEY=your_django_secret_key
   DEBUG=True
   OPENAI_API_KEY=your_openai_api_key
   DATABASE_URL=sqlite:///db.sqlite3
   ```

5. **Run database migrations & start the development server**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```
   The backend API server will be live at `http://127.0.0.1:8000/`.

---

### 2. Frontend Setup (React 19)

1. **Navigate to the frontend directory**:
   ```bash
   cd ../synap_frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Start the local Vite development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser to launch **SynapStudy**.

---

## 🔌 API Endpoint Documentation

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/ai_assistant/generate_quiz/` | Upload PDF and generate a formal MCQ/written quiz |
| `POST` | `/api/ai_assistant/generate_sets/` | Generate $N$ anti-cheat randomized question set variants |
| `POST` | `/api/ai_assistant/pdf_chat/` | Context-grounded RAG Q&A session with document |
| `POST` | `/api/ai_assistant/generate_flashcards/` | Auto-generate active recall study cards |
| `POST` | `/api/ai_assistant/grade_rubric/` | Auto-grade student submissions against rubric criteria |
| `GET` | `/api/classroom/` | List enrolled classrooms and syllabus materials |

---

## 🛠️ Major Engineering Challenges & Solutions

### 1. Eliminating LLM JSON Output Hallucination
- **Challenge**: LLMs occasionally return truncated or unparseable JSON when outputting large arrays of quiz questions.
- **Solution**: Built robust Pydantic schema validation layers and automatic regex repair parsers in Python with fallback retry loops to guarantee 100% valid JSON API payloads.

### 2. Algorithmic Anti-Cheat Variant Sets
- **Challenge**: Standard online exams allow students to copy answers when taking tests together.
- **Solution**: Designed the `FormalQuizSet` relational model and shuffle algorithm, producing non-identical question orderings and distractor choices per student.

### 3. Asynchronous Threaded PDF Processing
- **Challenge**: Large textbook PDFs caused API timeout errors during synchronous HTTP requests.
- **Solution**: Implemented chunked PDF parsing and background vector caching to deliver ultra-fast responses (<60 seconds).

---

## 🎓 Academic Metadata

This project was developed as a Final Year Capstone Project (FYP) at **COMSATS University Islamabad**.

- **Project Title**: SynapStudy — AI-Powered Smart Learning Engine
- **Institution**: COMSATS University Islamabad, Sahiwal Campus
- **Department**: Department of Computer Science
- **Session**: 2022 – 2026
- **Project Supervisor**: Ms. Afia Afzaal
- **Authors**:
  - **Hassan Rasool** (*CIIT/FA22-BSE-097/ISWL*) — System Architect & AI/ML Full Stack Engineer
  - **Fareena Noman** (*CIIT/FA22-BSE-092/ISWL*) — Frontend & UI Engineer

---

## 📝 License

This project is released under the [MIT License](LICENSE). Feel free to use, modify, and build upon it!

<div align="center">
  <sub>Built with ❤️ by <b>Hassan Rasool</b> & <b>Fareena Noman</b></sub>
</div>
