# Navigation Logging System

## Overview

This project includes a comprehensive navigation logging system that tracks all route changes, back/forward navigation, and navigation events throughout the application.

## Features

✅ **Automatic Navigation Logging**

- Logs every navigation to a new route
- Tracks back/forward navigation
- Records page reloads
- Captures navigation source (direct push, replace, link clicks)

✅ **Development-Friendly**

- Console logging in development mode only
- Color-coded log levels (DEBUG, INFO, WARN, ERROR)
- Detailed timestamps for each event
- Query parameters and routes captured

✅ **Performance Optimized**

- Memoized NavItem components
- Conditional rendering of dev tools
- Log rotation (keeps last 100 logs)
- Zero impact in production builds

## How It Works

### Logger Utility (`src/utils/logger.ts`)

The core logging system provides four log levels:

- **DEBUG**: Detailed information for diagnostics
- **INFO**: General information about navigation events
- **WARN**: Warning messages
- **ERROR**: Error messages

```typescript
import { logger } from '@/utils/logger';

logger.info('Navigation event', { href: '/dashboard' });
logger.debug('Nav item active', { path: '/home' });
```

### Navigation Hooks

#### `useNavigationLogger` Hook

Automatically tracks route changes and logs navigation events:

```typescript
import { useNavigationLogger } from '@/routes/hooks';

// In your main App component
useNavigationLogger();
```

#### `useRouter` Hook

Enhanced router utilities with logging:

```typescript
import { useRouter } from '@/routes/hooks';

const router = useRouter();

router.push('/dashboard'); // Logs: "Navigation: Navigating to route"
router.back(); // Logs: "Navigation: Going back"
router.replace('/home'); // Logs: "Navigation: Replacing route"
```

### RouterLink Component

Automatically logs when users click navigation links:

```tsx
<RouterLink href="/settings">Settings</RouterLink>
// Logs: "Navigation: Link clicked"
```

## Log Output Examples

### Development Console

```
[INFO] App initialized
[INFO] Navigation: Navigating to route {href: '/dashboard'}
[DEBUG] Nav item active {path: '/dashboard', title: 'Dashboard'}
[INFO] Route changed {from: '/', to: '/dashboard', search: ''}
[INFO] Navigation: Going back
[INFO] Route changed {from: '/dashboard', to: '/', search: ''}
```

## Accessing Logs

### In Browser Console (Development)

All logs are automatically printed to the console in development mode with color coding.

### Programmatically

```typescript
import { logger } from '@/utils/logger';

// Get all logs
const allLogs = logger.getLogs();

// Export logs as JSON
const json = logger.exportLogs();
console.log(json);

// Clear logs
logger.clearLogs();
```

## Production Optimization

In production builds (`import.meta.env.DEV` is false):

- ✅ Logger utility still works but doesn't print to console
- ✅ React Query DevTools are conditionally hidden
- ✅ Logs are collected in memory for debugging if needed
- ✅ NavItems are memoized to prevent unnecessary re-renders
- ✅ Zero performance impact

## Integration Points

The logging system integrates with:

1. **App Component** (`src/app.tsx`)
   - Initializes `useNavigationLogger` hook
   - Logs app initialization

2. **useRouter Hook** (`src/routes/hooks/use-router.ts`)
   - Logs all navigation actions (push, replace, back, forward, reload)

3. **RouterLink Component** (`src/routes/components/router-link.tsx`)
   - Logs link clicks with href information

4. **Navigation Components** (`src/layouts/nav.tsx`)
   - Logs when navigation items become active
   - Uses memoization for performance

## Best Practices

✅ **Do:**

- Use the logger for navigation debugging
- Check console logs during development
- Export logs when reporting issues
- Use appropriate log levels (INFO for user actions, DEBUG for app state)

❌ **Don't:**

- Don't manually add console.log for navigation events
- Don't worry about logging in production (it's optimized)
- Don't clear logs unless needed for memory management

## Example: Debugging Navigation Issues

```typescript
// Check all navigation history
import { logger } from '@/utils/logger';

const logs = logger.getLogs();
const navigationLogs = logs.filter(
  (log) =>
    log.message.includes('Navigation') || log.message.includes('Route changed')
);

console.table(navigationLogs);
```

## Files Modified

- ✅ `src/utils/logger.ts` - New logging utility
- ✅ `src/routes/hooks/use-router.ts` - Added logging
- ✅ `src/routes/hooks/use-navigation-logger.ts` - New hook
- ✅ `src/routes/components/router-link.tsx` - Added logging
- ✅ `src/app.tsx` - Integrated navigation logger
- ✅ `src/layouts/nav.tsx` - Memoized NavItem, added logging
- ✅ `src/providers/QueryProvider.tsx` - Optimized dev tools rendering
