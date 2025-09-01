# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Starts the development server on `http://localhost:3000`

### Build & Deploy
```bash
npm run build          # Build for production
npm run preview        # Preview production build locally
npm run generate       # Generate static site
```

### Database Operations
```bash
npx prisma generate     # Generate Prisma client after schema changes
npx prisma db push      # Push schema changes to database
npx prisma studio       # Open Prisma Studio for database management
```

### Code Quality
```bash
npx eslint .           # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Framework**: Nuxt.js 4 (Vue 3)
- **Styling**: Tailwind CSS v4 with @nuxt/ui
- **Database**: MySQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt password hashing
- **Type Safety**: TypeScript throughout

### Project Structure
```
server/api/auth/       # Authentication API endpoints (login, register)
prisma/               # Database schema and migrations
models/               # Business logic and data models
composables/          # Vue composables for shared logic
plugins/              # Nuxt plugins
types/                # TypeScript type definitions
app/                  # Application pages and components
```

### Authentication System
- JWT-based authentication with 7-day expiration
- Passwords hashed with bcrypt (salt rounds: 10)
- User registration and login endpoints at `/api/auth/`
- Uses `JWT_SECRET` environment variable

### Database Schema
- Primary entity: `User` with email, password, firstName, lastName
- Uses MySQL as primary database
- Prisma client auto-generated from schema changes

### Environment Configuration
- Requires `DATABASE_URL` for MySQL connection
- Requires `JWT_SECRET` for token signing
- Configuration in `.env` file

### Development Notes
- French language used in error messages and comments
- Nuxt auto-imports enabled for composables and utilities
- ESLint configured with Nuxt defaults
- Uses Nuxt's file-based routing system