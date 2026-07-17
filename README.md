# EduVerse AI

EduVerse AI is the official project foundation for OpenAI Build Week 2026. This repository currently contains only the production-ready frontend foundation: no AI features, no backend, and no dashboard have been implemented yet.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- ESLint

## Available Scripts

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Folder Structure

```text
src/
  assets/              Static assets for future images, icons, and media.
  components/
    layout/            App-level layout components such as the shared shell.
    ui/                Reusable accessible UI primitives.
  data/                Static app data used by pages and components.
  pages/               Route-level page components.
  routes/              Router configuration.
  styles/              Global styles and Tailwind theme tokens.
  types/               Shared TypeScript types.
```

## Current Pages

- Landing page (`/`)
- Login page (`/login`)
- Signup page (`/signup`)
- Role selection page (`/roles`)

## Current Roles

- Student
- Teacher
- Parent
- School Administrator

## Student Experience Routes

- Student dashboard (`/dashboard`)
- Learning Twin AI (`/learning-twin`)
- AI Exam Predictor (`/exam-predictor`)
- AI Study Coach (`/study-coach`)

## Feature Architecture

Feature work lives in `src/features/` with feature-scoped components, data, hooks, services, types, and utilities where applicable. Current AI experiences use mock providers and shared types so future backend or OpenAI API integrations can be added without replacing page components.
