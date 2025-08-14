# Overview

This is a full-stack portfolio website built for Cameron Crook, showcasing his game development and software engineering projects. The application demonstrates a modern web development stack with a React frontend and Express backend, designed to present professional work experience, technical skills, and completed projects in an interactive format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI elements
- **State Management**: TanStack React Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider supporting light/dark modes with CSS variables

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints serving portfolio data (projects, experience, skills)
- **Data Layer**: Abstract storage interface with in-memory implementation containing pre-populated portfolio data
- **Development Setup**: Integrated Vite development server with hot module replacement

## Component Structure
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Layout Components**: Modular sections (Hero, Projects, Experience, Skills, About, Contact, Footer)
- **Form Handling**: React Hook Form with Zod validation for contact forms

## Database Schema
- **Projects**: Stores portfolio projects with title, description, technologies, images, and status
- **Experience**: Professional work history with companies, roles, and responsibilities  
- **Skills**: Technical capabilities organized by category with icons and descriptions
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect and Zod validation schemas

## Development Workflow
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Full TypeScript coverage with shared type definitions
- **Code Organization**: Monorepo structure with shared schema between frontend and backend

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Backend**: Express.js with TypeScript support via tsx
- **Build Tools**: Vite with React plugin, esbuild for production builds

## Database & ORM
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking and schema validation

## UI & Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icon library
- **Utilities**: clsx and tailwind-merge for conditional styling

## Development Tools
- **Replit Integration**: Vite plugins for Replit-specific features and error handling
- **Font Loading**: Google Fonts integration (Inter, DM Sans, Geist Mono, Fira Code)
- **Session Management**: PostgreSQL session storage via connect-pg-simple

## Form & Interaction
- **Form Management**: React Hook Form with Hookform resolvers
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries
- **Command Interface**: cmdk for command palette functionality