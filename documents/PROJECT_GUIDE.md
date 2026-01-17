# Material Kit Template - Complete Project Guide

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Key Features](#key-features)
6. [Architecture & Patterns](#architecture--patterns)
7. [Component Guide](#component-guide)
8. [Routing System](#routing-system)
9. [State Management](#state-management)
10. [Navigation Logging](#navigation-logging)
11. [Theme System](#theme-system)
12. [API Integration](#api-integration)
13. [Development Workflow](#development-workflow)
14. [Best Practices](#best-practices)
15. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Material Kit Template (TypeScript)** is a modern React dashboard template built with Material-UI (MUI), offering:

- 🎨 Beautiful Material Design UI components
- 🚀 Fast development with Vite
- 📱 Responsive layout (mobile-first)
- 🔐 Authentication ready (Firebase, Google, GitHub)
- 📊 Dashboard with charts and analytics
- 🎯 Modular component architecture
- 🔍 Comprehensive navigation logging
- ⚡ Performance optimized

### Use Cases

- Admin dashboards
- SaaS applications
- Internal tools
- Content management systems
- Analytics platforms
- Business management applications

---

## Tech Stack

### Frontend Framework

- **React 18.2.0** - UI library with hooks
- **TypeScript 5.9** - Type safety
- **Vite 7.2** - Lightning-fast build tool

### UI & Styling

- **Material-UI (MUI) 7.3.7** - Component library
- **Emotion** - CSS-in-JS styling
- **@mui/lab** - Additional experimental MUI components

### Routing & Navigation

- **React Router DOM 7.12** - Client-side routing
- **React Router hooks** - Navigation utilities

### State Management

- **TanStack React Query 5.62** - Server state management
- **React Context API** - Local state
- **Custom hooks** - Application logic

### Forms & Validation

- **React Hook Form 7.71** - Efficient form handling
- **PropTypes** - Runtime type checking

### Data & Utilities

- **Axios 1.13** - HTTP client
- **date-fns 4.1** - Date utilities
- **dayjs 1.11** - Alternative date library
- **Lodash 4.17** - Utility functions
- **Numeral 2.0** - Number formatting
- **uuid 13.0** - ID generation

### Notifications & UI

- **React Toastify 11.0** - Toast notifications
- **React Helmet Async 2.0** - Document head management
- **ApexCharts** - Data visualization
- **Iconify** - Icon library

### Development & Build

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vite Plugin Checker** - Type checking

### Backend & Services

- **Firebase 12.8** - Auth & database
- **Socket.io-client 4.8** - Real-time communication
- **Axios interceptors** - Request/response handling

---

## Project Structure

```
material-kit-template-ts/
│
├── 📁 public/                          # Static assets
│   └── assets/
│       ├── background/                 # Background images
│       ├── icons/                      # Icon SVGs
│       ├── illustrations/              # UI illustrations
│       └── images/
│           ├── avatars/                # User avatars
│           ├── covers/                 # Page covers
│           └── products/               # Product images
│
├── 📁 src/                             # Source code
│   │
│   ├── 📁 components/                  # Reusable UI components
│   │   ├── EffectBtn.tsx              # Button with effects
│   │   ├── loadingView.tsx            # Loading indicator
│   │   ├── button/                    # Button variants
│   │   ├── chart/                     # Chart utilities
│   │   ├── color-utils/               # Color picker & preview
│   │   ├── iconify/                   # Icon wrapper
│   │   ├── icons/                     # Custom SVG icons
│   │   ├── input/                     # Input components
│   │   ├── label/                     # Label components
│   │   ├── loadingView/               # Loading spinner
│   │   ├── logo/                      # App logo
│   │   ├── modal/                     # Modal dialogs
│   │   ├── scrollbar/                 # Custom scrollbar
│   │   ├── svg-color/                 # SVG color utilities
│   │   └── upload/                    # File upload
│   │
│   ├── 📁 constants/                   # Application constants
│   │   └── index.ts                   # Constant definitions
│   │
│   ├── 📁 contexts/                    # React Context
│   │   ├── modal-context.tsx          # Modal state management
│   │   └── use-modal.tsx              # Modal hook
│   │
│   ├── 📁 helper/                      # Helper functions
│   │   └── index.ts                   # Utility functions
│   │
│   ├── 📁 hooks/                       # Custom React hooks
│   │   ├── use-responsive.ts          # Media query hook
│   │   └── use-scroll-to-top.ts       # Scroll to top
│   │
│   ├── 📁 layouts/                     # Layout components
│   │   ├── config-layout.ts           # Layout configuration
│   │   ├── config-navigation.tsx      # Navigation config
│   │   ├── header.tsx                 # Top header
│   │   ├── main.tsx                   # Main content area
│   │   ├── nav.tsx                    # Sidebar navigation
│   │   └── index.tsx                  # Layout wrapper
│   │
│   ├── 📁 lib/                         # External library setup
│   │   └── react-query.ts             # TanStack Query config
│   │
│   ├── 📁 pages/                       # Page components
│   │   ├── private/                   # Protected pages
│   │   │   └── app.tsx               # Dashboard page
│   │   └── public/                    # Public pages
│   │       ├── login.tsx             # Login page
│   │       └── page-not-found.tsx    # 404 page
│   │
│   ├── 📁 providers/                   # Context providers
│   │   └── QueryProvider.tsx          # React Query setup
│   │
│   ├── 📁 routes/                      # Routing system
│   │   ├── sections.tsx               # Route definitions
│   │   ├── components/
│   │   │   ├── index.ts              # Component exports
│   │   │   └── router-link.tsx       # Link component
│   │   └── hooks/
│   │       ├── index.ts              # Hook exports
│   │       ├── use-navigation-logger.ts
│   │       ├── use-pathname.ts       # Get current path
│   │       └── use-router.ts         # Navigation utilities
│   │
│   ├── 📁 sections/                    # Page sections/views
│   │   ├── error/                     # Error views
│   │   │   ├── index.ts
│   │   │   └── not-found-view.tsx    # 404 view
│   │   └── login/                     # Login section
│   │       ├── index.ts
│   │       └── login-view.tsx        # Login form
│   │
│   ├── 📁 services/                    # API services
│   │   ├── endpoints.ts               # API endpoints
│   │   ├── initApi.ts                 # API initialization
│   │   ├── root-api.ts                # Main API client
│   │   └── auth/
│   │       └── index.ts              # Auth service
│   │
│   ├── 📁 theme/                       # MUI theme
│   │   ├── css.ts                     # CSS utilities
│   │   ├── custom-shadows.ts          # Custom shadows
│   │   ├── index.tsx                  # Theme provider
│   │   ├── overrides.ts               # Component overrides
│   │   ├── palette.ts                 # Color palette
│   │   ├── shadows.ts                 # Box shadows
│   │   └── typography.ts              # Font settings
│   │
│   ├── 📁 types/                       # TypeScript types
│   │   ├── icons.ts                   # Icon types
│   │   ├── index.ts                   # Type exports
│   │   └── theme.ts                   # Theme types
│   │
│   ├── 📁 utils/                       # Utility functions
│   │   ├── format-number.ts           # Number formatting
│   │   ├── format-time.ts             # Time formatting
│   │   └── logger.ts                  # Navigation logger
│   │
│   ├── app.tsx                        # Main App component
│   ├── global.css                     # Global styles
│   └── main.tsx                       # React entry point
│
├── 📁 .vscode/                        # VS Code settings
├── 📁 .husky/                         # Git hooks
│
├── 📄 index.html                      # HTML entry point
├── 📄 package.json                    # Dependencies
├── 📄 tsconfig.json                   # TypeScript config
├── 📄 vite.config.ts                  # Vite configuration
├── 📄 eslint.config.js                # ESLint configuration
├── 📄 .prettierrc.json                # Prettier config
├── 📄 .eslintignore                   # ESLint ignore rules
├── 📄 .gitignore                      # Git ignore rules
│
└── 📚 Documentation/
    ├── NAVIGATION_LOGGING.md          # Logger documentation
    ├── LOGGING_QUICK_START.md         # Quick reference
    ├── LOGGING_IMPLEMENTATION.md      # Implementation guide
    └── CHANGELOG.md                   # Change summary
```

---

## Getting Started

### Prerequisites

- **Node.js** 16+ (recommended 18+)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd material-kit-template-ts

# Install dependencies
npm install
# or
yarn install

# Create .env file for environment variables
cp .env.example .env.local
```

### Environment Setup

Create `.env.local`:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SOCKET_URL=http://localhost:3000

# Google OAuth (optional)
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# GitHub OAuth (optional)
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev

# View console logs for navigation tracking
# Open DevTools: F12 or Cmd+Option+I
```

### Build for Production

```bash
# Build TypeScript and bundle
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

---

## Key Features

### 1. **Authentication System**

- ✅ Email/password authentication
- ✅ Google OAuth integration
- ✅ GitHub OAuth integration
- ✅ Firebase authentication
- ✅ Protected routes
- ✅ Session management

**File**: `src/services/auth/`

### 2. **Dashboard Layout**

- ✅ Responsive sidebar navigation
- ✅ Top header with user menu
- ✅ Main content area
- ✅ Mobile-friendly hamburger menu
- ✅ Sticky header/sidebar options

**Files**: `src/layouts/`

### 3. **Navigation System**

- ✅ Client-side routing with React Router
- ✅ Automatic navigation logging
- ✅ Active route highlighting
- ✅ Navigation guards
- ✅ History tracking

**Files**: `src/routes/`

### 4. **Comprehensive Logging**

- ✅ Route change tracking
- ✅ Link click logging
- ✅ Navigation history
- ✅ Custom event logging
- ✅ Production-optimized

**Files**: `src/utils/logger.ts`, `src/routes/hooks/use-navigation-logger.ts`

### 5. **State Management**

- ✅ React Query for server state
- ✅ Context API for local state
- ✅ Custom hooks for logic
- ✅ Modal state management
- ✅ Notification system

**Files**: `src/contexts/`, `src/providers/`, `src/lib/`

### 6. **Theme System**

- ✅ Material Design theming
- ✅ Customizable color palette
- ✅ Typography system
- ✅ Responsive design
- ✅ Dark/light mode ready

**Files**: `src/theme/`

### 7. **Data Visualization**

- ✅ ApexCharts integration
- ✅ Chart utilities
- ✅ Data formatting helpers
- ✅ Custom chart components

**Files**: `src/components/chart/`

---

## Architecture & Patterns

### 1. **Component Structure**

```typescript
// Functional Component with Hooks
import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface MyComponentProps {
  title: string;
  children?: ReactNode;
}

const MyComponent: FC<MyComponentProps> = ({ title, children }) => {
  return <div>{title}</div>;
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MyComponent;
```

### 2. **Custom Hooks Pattern**

```typescript
// src/hooks/use-my-hook.ts
import { useEffect, useState } from 'react';

export function useMyHook(dependency: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Logic here
  }, [dependency]);

  return data;
}
```

### 3. **Context API Pattern**

```typescript
// Create context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Provider component
export function MyProvider({ children }) {
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to use context
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) throw new Error('Hook must be used within Provider');
  return context;
}
```

### 4. **Service Layer Pattern**

```typescript
// src/services/my-service.ts
import api from '@/services/root-api';

export const myService = {
  fetchData: async () => {
    const response = await api.get('/endpoint');
    return response.data;
  },

  createItem: async (data) => {
    const response = await api.post('/endpoint', data);
    return response.data;
  },
};
```

### 5. **React Query Pattern**

```typescript
import { useQuery } from '@tanstack/react-query';
import { myService } from '@/services/my-service';

export function useMyData() {
  return useQuery({
    queryKey: ['my-data'],
    queryFn: () => myService.fetchData(),
  });
}
```

---

## Component Guide

### Common Components

#### Button Component

```tsx
import Button from '@/components/button';

<Button variant="contained">Click me</Button>;
```

#### Modal Component

```tsx
import { useModal } from '@/contexts/use-modal';

const { openModal } = useModal();

openModal(<div>Modal content</div>);
```

#### Loading View

```tsx
import LoadingView from '@/components/loadingView';

<LoadingView />;
```

#### Input Component

```tsx
import Input from '@/components/input';

<Input placeholder="Enter text" onChange={handleChange} />;
```

#### Color Picker

```tsx
import ColorPicker from '@/components/color-utils/color-picker';

<ColorPicker value={color} onChange={setColor} />;
```

---

## Routing System

### Routes Configuration

**File**: `src/routes/sections.tsx`

```typescript
export const IndexPage = lazy(() => import('@/pages/private/app'));
export const LoginPage = lazy(() => import('@/pages/public/login'));
export const Page404 = lazy(() => import('@/pages/public/page-not-found'));

function PrivateRouter() {
  const routes = useRoutes([
    {
      element: <DashboardLayout><Outlet /></DashboardLayout>,
      children: [
        { element: <IndexPage />, index: true },
        { path: 'demo', element: <IndexPage /> },
      ],
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
  return routes;
}
```

### Navigation Routes

**File**: `src/layouts/config-navigation.tsx`

```typescript
const navConfig = [
  { title: 'dashboard', path: '/', icon: icon('ic_analytics') },
  { title: 'task', path: '/task', icon: icon('ic_task') },
  { title: 'user', path: '/user', icon: icon('ic_user') },
  { title: 'product', path: '/products', icon: icon('ic_cart') },
  { title: 'blog', path: '/blog', icon: icon('ic_blog') },
  { title: 'login', path: '/login', icon: icon('ic_lock') },
];
```

### Navigation Hooks

```typescript
import { useRouter } from '@/routes/hooks';

const router = useRouter();

// Navigate
router.push('/dashboard');
router.replace('/login');
router.back();
router.forward();
router.reload();
```

---

## State Management

### React Query Setup

**File**: `src/lib/react-query.ts`

```typescript
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
```

### Using React Query

```typescript
import { useQuery } from '@tanstack/react-query';

function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users');
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return <div>{/* render data */}</div>;
}
```

### Context API

```typescript
import { useModal } from '@/contexts/use-modal';

const { openModal, hideModal } = useModal();

openModal(<div>Modal Content</div>);
```

---

## Navigation Logging

### How It Works

Every navigation action is automatically logged:

```typescript
// In your browser console (development)
[INFO] App initialized
[INFO] Navigation: Link clicked {href: '/dashboard'}
[INFO] Route changed {from: '/', to: '/dashboard', search: ''}
[DEBUG] Nav item active {path: '/dashboard', title: 'Dashboard'}
```

### Log Levels

- **DEBUG**: Diagnostic information
- **INFO**: General information (default)
- **WARN**: Warning messages
- **ERROR**: Error messages

### Accessing Logs

```typescript
import { logger } from '@/utils/logger';

// Get all logs
const logs = logger.getLogs();

// Log custom events
logger.info('User action', { action: 'clicked' });

// Export as JSON
const json = logger.exportLogs();
```

**Documentation**: See [NAVIGATION_LOGGING.md](NAVIGATION_LOGGING.md)

---

## Theme System

### Customizing Colors

**File**: `src/theme/palette.ts`

```typescript
export const palette = () => ({
  primary: {
    main: '#1976D2',
    light: '#42A5F5',
    dark: '#1565C0',
  },
  secondary: {
    main: '#DC004E',
  },
  background: {
    default: '#F4F6F8',
    paper: '#FFFFFF',
  },
});
```

### Customizing Typography

**File**: `src/theme/typography.ts`

```typescript
export const typography = {
  fontFamily: 'Public Sans, sans-serif',
  h1: { fontSize: '2.5rem', fontWeight: 700 },
  h2: { fontSize: '2rem', fontWeight: 700 },
  body1: { fontSize: '1rem' },
};
```

### Using Theme in Components

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();

  return (
    <Box sx={{ color: theme.palette.primary.main }}>
      Themed content
    </Box>
  );
}
```

---

## API Integration

### API Configuration

**File**: `src/services/root-api.ts`

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

export default api;
```

### API Endpoints

**File**: `src/services/endpoints.ts`

```typescript
export const endpoints = {
  sign_in: '/auth/sign-in',
  sign_in_gg: '/auth/google',
  sign_in_github: '/auth/github',
  get_profile: '/auth/profile',
};
```

### Creating Services

```typescript
// src/services/my-service.ts
import api from './root-api';
import { endpoints } from './endpoints';

export const myService = {
  getUsers: () => api.get('/users'),
  getUser: (id: string) => api.get(`/users/${id}`),
  createUser: (data) => api.post('/users', data),
  updateUser: (id: string, data) => api.put(`/users/${id}`, data),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
};
```

---

## Development Workflow

### File Organization

```
Create new feature:
├── components/          # UI components
├── hooks/              # Custom React hooks
├── contexts/           # Context providers (if needed)
├── services/           # API services
├── pages/              # Page components
├── types/              # TypeScript types
└── utils/              # Utility functions
```

### Development Steps

1. **Create component** in `src/components/`
2. **Add hooks** if needed in `src/hooks/`
3. **Create service** in `src/services/`
4. **Add types** in `src/types/`
5. **Create page** in `src/pages/`
6. **Add route** in `src/routes/sections.tsx`
7. **Add navigation** in `src/layouts/config-navigation.tsx`

### Code Quality Checklist

- ✅ TypeScript types defined
- ✅ PropTypes added for runtime safety
- ✅ ESLint passes without errors
- ✅ Prettier formatting applied
- ✅ Components documented
- ✅ Error handling included
- ✅ Loading states handled
- ✅ Responsive design tested

---

## Best Practices

### 1. **Component Naming**

```typescript
// ✅ Good
const UserProfileCard = () => {};
const useUserData = () => {};
const USER_ROLES = {};

// ❌ Avoid
const UPC = () => {};
const useUser = () => {};
const roles = {};
```

### 2. **Type Safety**

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email: string;
}

// ❌ Avoid
type User = any;
```

### 3. **Error Handling**

```typescript
// ✅ Good
try {
  const data = await api.get('/users');
  return data;
} catch (error) {
  console.error('Failed to fetch users:', error);
  throw error;
}

// ❌ Avoid
const data = await api.get('/users');
```

### 4. **Performance**

```typescript
// ✅ Good - Memoized component
const UserCard = memo(({ user }) => (
  <div>{user.name}</div>
));

// ✅ Good - useCallback for handlers
const handleClick = useCallback(() => {
  // action
}, [dependency]);
```

### 5. **Responsive Design**

```typescript
// ✅ Good - Mobile first
sx={{
  width: { xs: '100%', sm: '80%', md: '60%' },
  padding: { xs: 1, md: 2 },
}}

// ❌ Avoid - Desktop first only
sx={{ width: '60%', padding: 2 }}
```

### 6. **Accessibility**

```typescript
// ✅ Good
<Button aria-label="Close menu">X</Button>

// ❌ Avoid
<button onClick={handleClose}>X</button>
```

---

## Troubleshooting

### Common Issues

#### 1. **Build Fails with TypeScript Errors**

```bash
# Solution: Run type check
npm run build

# Or fix manually
npm run lint:fix
```

#### 2. **Blank Page or Console Errors**

```
Check:
1. Root element exists in index.html
2. Environment variables set in .env.local
3. API endpoints are correct
4. Console for specific error messages
```

#### 3. **Routing Not Working**

```typescript
// Check:
1. Routes defined in src/routes/sections.tsx
2. BrowserRouter wraps entire app
3. Navigation components use useRouter or RouterLink
4. Path matches route definitions
```

#### 4. **Styles Not Applied**

```
Check:
1. Theme provider wraps components
2. sx prop syntax is correct
3. CSS classes are scoped correctly
4. Media queries are valid
```

#### 5. **API Calls Failing**

```typescript
// Debug:
1. Check network tab in DevTools
2. Verify base URL in .env.local
3. Check authorization headers
4. Review interceptors in root-api.ts
```

#### 6. **Navigation Logs Not Showing**

```typescript
// Check:
1. Running in development mode (npm run dev)
2. Console is open (F12)
3. useNavigationLogger is called in App component
4. Logs are in "All levels" filter in console
```

---

## Environment Variables Reference

```env
# Development
VITE_API_BASE_URL=http://localhost:3000/api
VITE_SOCKET_URL=http://localhost:3000

# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# OAuth
VITE_GOOGLE_CLIENT_ID=
VITE_GITHUB_CLIENT_ID=

# Feature Flags
VITE_ENABLE_LOGGING=true
VITE_DEBUG_MODE=false
```

---

## Scripts Reference

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Check linting errors
npm run lint:fix         # Fix linting errors automatically

# Git Hooks
npm run prepare          # Setup Husky hooks
```

---

## Additional Resources

- **Material-UI Documentation**: https://mui.com/
- **React Router Documentation**: https://reactrouter.com/
- **React Query Documentation**: https://tanstack.com/query/latest
- **TypeScript Documentation**: https://www.typescriptlang.org/
- **Vite Documentation**: https://vitejs.dev/
- **Firebase Documentation**: https://firebase.google.com/docs

---

## Support & Contribution

### Getting Help

1. Check troubleshooting section
2. Review documentation files
3. Check browser console for errors
4. Review network requests in DevTools

### Contributing

1. Follow code style guidelines
2. Write TypeScript types
3. Add PropTypes for components
4. Test responsive design
5. Run lint before committing
6. Update documentation

---

## License

This project is provided as-is for development and learning purposes.

---

**Last Updated**: January 17, 2026

**Version**: 1.0.0

**Status**: ✅ Production Ready
