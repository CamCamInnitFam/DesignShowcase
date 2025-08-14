# Overview

This is a full-stack portfolio website built for Cameron Crook, showcasing his game development and software engineering projects. The application demonstrates a modern web development stack with a React frontend and Express backend, designed to present professional work experience, technical skills, and completed projects in an interactive format.

# User Preferences

Preferred communication style: Simple, everyday language.

## Portfolio Content Preferences (Updated 2025-01-14)
- Maintain humble, graduate-appropriate tone throughout
- All skills described as "proficient" rather than advanced/expert language
- Role described as "Game Developer & Software Developer"
- Avoid "cutting edge" or overly ambitious language
- Include Cameron Crook name prominently in navigation and hero section
- Emphasize learning and growth mindset suitable for recent graduate
- About Me section positioned above work sections per user preference
- Internal project routing system with placeholder pages instead of external links

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
- **Projects**: Stores portfolio projects with title, description, technologies, images, and status (completed, in-progress, coming-soon)
- **Experience**: Professional work history including Clarksons Research placement year with detailed responsibilities
- **Skills**: Technical capabilities organized by category, all marked as "proficient" level
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect and Zod validation schemas

### Current Portfolio Content
- **Featured Projects**: 10 completed projects from university and personal work
- **Upcoming Projects**: 3 placeholder projects (Compression Algorithm in Java, Tankz multiplayer game, VR Unity game)
- **Professional Experience**: Clarksons Research placement year with C#, XAML, VBA, SQL
- **Skills**: 6 categories covering programming languages, game development, web development, databases, creative tools, and specializations

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