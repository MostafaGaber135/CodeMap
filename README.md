# Code Map

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://code-map-seven.vercel.app/)

**Code Map** is a modern web application designed to organize and simplify learning for developers by showcasing structured learning paths and roadmaps. Easily browse curated tracks based on technologies with a simple and interactive UI.

## ✨ Features

- Browse structured learning paths and roadmaps for developers.
- Modern UI built with Next.js.
- Data storage and management using Supabase.
- Responsive design (works perfectly on all screens).
- Fast performance and seamless deployment via Vercel.

## 🚀 Live Demo

[https://code-map-seven.vercel.app/](https://code-map-seven.vercel.app/)

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend as a Service:** [Supabase](https://supabase.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/username/code-map.git
    cd code-map
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Setup Supabase**
    - Create a new project on [Supabase](https://supabase.com/).
    - Set up the required tables (e.g., `learning_paths`, `technologies`, etc.).
    - Get your Supabase project API keys (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).

4. **Create a `.env.local` file**
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

5. **Run the development server**
    ```bash
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 🗂️ Folder Structure

```text
app/
├── _components/              # Reusable React components
│
├── learningPaths/            # Pages related to all learning paths
│   ├── page.tsx.tsx
│   └── TrackHeader/
│       └── page.tsx
│
├── TrackRoadmap/             # Roadmap views for tracks
│   ├── page.tsx
│   └── TrackStep/
│       └── page.tsx
│
├── (Legal & Policies)/       # Legal and help pages
│   ├── help/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
│
├── track\[title]/            # Dynamic routing for tracks
│   └── [subtrackId]/         # Nested dynamic routing for subtracks
│       ├── page.tsx
│       └── index.tsx
│
├── utils/
│   └── supabaseClient.ts     # Supabase client configuration
