# TechJoint

TechJoint is a React + TypeScript web app for hosting internal tools as clickable icons. It uses Vite and Tailwind CSS and deploys to GitHub Pages.

## Setup

```bash
pnpm install
cp .env.example .env # add your API key
pnpm dev
```

## Build

```bash
pnpm build
```

The app is deployed automatically via GitHub Actions when changes land on `main`.

## Features
- Routing via React Router
- Tailwind CSS styling
- Icon grid listing available tools
- Example audio transcription API wrapper
