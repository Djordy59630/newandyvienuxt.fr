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
server/api/inscriptions/  # Registration/enrollment endpoints
prisma/               # Database schema and migrations
app/composables/      # Vue composables for shared logic
app/pages/inscription/ # Multi-step registration flow pages
app/middleware/       # Nuxt middleware (auth protection)
types/                # TypeScript type definitions
```

### Authentication System
- JWT-based authentication with 7-day expiration
- Passwords hashed with bcrypt (salt rounds: 10)
- User registration and login endpoints at `/api/auth/`
- Auth composable at `app/composables/useAuth.ts` manages authentication state
- Uses cookies for token and user data persistence

### Database Schema
Main entities in MySQL database:
- **User**: Authentication and admin users
- **Dancer**: Students/participants with personal info
- **DanceGroup**: Available dance classes/groups
- **Registration**: Links dancers to dance groups with status tracking
- **guardians**: Legal guardians for minors
- **EmergencyContact**: Emergency contact information

### Multi-Step Registration Flow
Located in `app/pages/inscription/`:
- `step-1.vue`: Personal information collection
- `step-2.vue`: Dance group selection
- `step-3.vue`: Emergency contacts and guardian info
- `step-4.vue`: Review and submission
- `success.vue`: Registration confirmation

### Environment Configuration
Required environment variables:
- `DATABASE_URL`: MySQL connection string
- `JWT_SECRET`: Secret key for JWT token signing

### Development Notes
- French language used throughout (error messages, UI text, comments)
- Nuxt auto-imports enabled for composables and utilities
- Uses Nuxt's file-based routing system
- API endpoints use defineEventHandler pattern
- Frontend uses animated gradients with orange/red color scheme