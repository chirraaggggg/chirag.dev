import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "alpha-eraser",
    title: "Alpha Eraser",
    period: {
      start: "2025",
    },
    link: "https://neat-bg.vercel.app",
    skills: [
      "AI/ML",
      "React",
      "Next.js",
      "TypeScript",
      "Image Processing",
      "Deep Learning",
      "Python",
      "FastAPI",
    ],
    description: `An intelligent web application powered by AI for background removal from images.

**Features:**

- 🤖 AI-powered background removal using deep learning models
- 📸 Drag-and-drop image upload interface
- 🎨 Transparent background export or custom color backgrounds
- ⚡️ Fast processing with GPU acceleration
- 🌐 Web-based, no installation required
- 📱 Mobile-friendly responsive design

**Tech Stack:**

- Frontend: React, Next.js, TypeScript
- Backend: Python, FastAPI with deep learning models
- Image Processing: OpenCV, Pillow
- Deployment: Vercel (Frontend), Cloud deployment (Backend)`,
    isExpanded: true,
  },
  {
    id: "slate",
    title: "Slate",
    period: {
      start: "2025",
    },
    link: "https://slate-notes.vercel.app",
    skills: [
      "AI/ML",
      "React",
      "Next.js",
      "TypeScript",
      "LLM Integration",
      "Natural Language Processing",
      "Tailwind CSS",
      "Database",
    ],
    description: `An AI-powered note-taking assistant that helps you organize, summarize, and search through your notes intelligently.

**Features:**

- 🤖 AI-powered note summarization and organization
- 🔍 Intelligent search and tagging suggestions
- 📝 Rich text editor with markdown support
- 💡 Smart note suggestions and insights
- 🏷️ Automatic categorization based on content
- 📱 Seamless sync across devices
- 🔐 Secure and private note storage

**Tech Stack:**

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- AI/ML: LLM integration for intelligent processing
- Database: MongoDB or PostgreSQL for persistence`,
  },
  {
    id: "vehicle-insurance-mlops",
    title: "Vehicle Insurance MLOps",
    period: {
      start: "2025",
    },
    skills: [
      "MLOps",
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Data Science",
      "Pipeline Automation",
      "Model Deployment",
      "Docker",
    ],
    description: `A machine learning operations project for vehicle insurance prediction and risk assessment using MLOps best practices.

**Project Overview:**

- 🚗 Predict insurance claims and risk assessment for vehicles
- 📊 Data pipeline for insurance data processing and feature engineering
- 🤖 ML model training with scikit-learn and TensorFlow
- 📈 Model evaluation and performance monitoring
- 🔄 Automated ML pipeline with CI/CD
- 🐳 Containerized deployment with Docker
- 📝 Model versioning and experiment tracking

**Features:**

- Automated data preprocessing and feature engineering
- Multiple ML models (Regression, Classification)
- Model validation and cross-validation
- Performance metrics tracking and logging
- Automated retraining pipeline
- API endpoint for predictions
- Monitoring and alerting for model drift

**Tech Stack:**

- Python, Pandas, NumPy, Scikit-learn, TensorFlow
- MLflow for experiment tracking
- Docker for containerization
- PostgreSQL/MongoDB for data storage
- FastAPI for model serving`,
  },
];
