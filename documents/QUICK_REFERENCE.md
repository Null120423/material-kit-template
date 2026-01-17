# Quick Reference - Material Kit Template

## 🚀 Quick Start Commands

```bash
# Install & Run
npm install
npm run dev                    # http://localhost:5173

# Build & Deploy
npm run build
npm run preview

# Code Quality
npm run lint
npm run lint:fix
```

---

## 📂 Key Directories

| Directory         | Purpose                |
| ----------------- | ---------------------- |
| `src/components/` | Reusable UI components |
| `src/pages/`      | Page/route components  |
| `src/layouts/`    | Layout templates       |
| `src/hooks/`      | Custom React hooks     |
| `src/services/`   | API services           |
| `src/contexts/`   | Context providers      |
| `src/routes/`     | Route definitions      |
| `src/theme/`      | Theme configuration    |
| `src/utils/`      | Utility functions      |
| `src/types/`      | TypeScript definitions |

---

## 🎨 Common Component Usage

### Material-UI Components

```typescript
import { Box, Button, TextField, Card } from '@mui/material';

// Box - Layout container
<Box sx={{ padding: 2, display: 'flex' }}>

// Button - Action button
<Button variant="contained">Click</Button>

// TextField - Form input
<TextField label="Name" value={name} onChange={handleChange} />

// Card - Content container
<Card>Content</Card>
```

### Custom Components

```typescript
import Button from '@/components/button';
import { useModal } from '@/contexts/use-modal';
import LoadingView from '@/components/loadingView';

// Button
<Button>Custom Button</Button>

// Modal
const { openModal } = useModal();
openModal(<div>Modal Content</div>);

// Loading
<LoadingView />
```

---

## 🔀 Navigation

### Using Router

```typescript
import { useRouter } from '@/routes/hooks';

const router = useRouter();

// Navigate
router.push('/dashboard'); // Go to path
router.replace('/login'); // Replace history
router.back(); // Go back
router.forward(); // Go forward
router.reload(); // Reload page
```

### Using Links

```typescript
import { RouterLink } from '@/routes/components';

<RouterLink href="/dashboard">
  Dashboard
</RouterLink>
```

### Get Current Path

```typescript
import { usePathname } from '@/routes/hooks';

const pathname = usePathname();
```

---

## 🔍 Logging

### Log Events

```typescript
import { logger } from '@/utils/logger';

logger.info('Event name', { data: value });
logger.debug('Debug info', { state });
logger.warn('Warning', { issue });
logger.error('Error', { code });
```

### View Logs

```typescript
// In browser console
logger.getLogs(); // Get all logs
logger.exportLogs(); // Export as JSON
logger.clearLogs(); // Clear logs
```

---

## 📡 API Integration

### Make Requests

```typescript
import api from '@/services/root-api';

// GET
const data = await api.get('/endpoint');

// POST
const result = await api.post('/endpoint', { data });

// PUT
const updated = await api.put('/endpoint/id', { data });

// DELETE
await api.delete('/endpoint/id');
```

### With React Query

```typescript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: () => api.get('/users'),
});
```

---

## 🎯 State Management

### Context API

```typescript
import { useModal } from '@/contexts/use-modal';

const { openModal, hideModal } = useModal();

openModal(<Content />);
hideModal();
```

### React Query

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Query (GET)
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

// Mutation (POST, PUT, DELETE)
const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
});

mutation.mutate({ name: 'John' });
```

---

## 🎨 Styling

### Using sx Prop

```typescript
<Box sx={{
  backgroundColor: 'primary.main',
  padding: 2,
  borderRadius: 1,
  '&:hover': { backgroundColor: 'primary.dark' },
}}>
  Styled Box
</Box>
```

### Responsive Design

```typescript
<Box sx={{
  width: { xs: '100%', sm: '50%', md: '33%', lg: '25%' },
  padding: { xs: 1, md: 2, lg: 3 },
  fontSize: { xs: '12px', md: '16px' },
}}>
  Responsive Box
</Box>
```

### Using Theme

```typescript
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

<Box sx={{ color: theme.palette.primary.main }}>
  Using theme color
</Box>
```

---

## 📝 Forms

### React Hook Form

```typescript
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const { register, handleSubmit, watch } = useForm();

const onSubmit = (data) => console.log(data);

<form onSubmit={handleSubmit(onSubmit)}>
  <TextField {...register('name')} />
  <Button type="submit">Submit</Button>
</form>
```

---

## 📊 Charts

### ApexCharts

```typescript
import ReactApexChart from 'react-apexcharts';

<ReactApexChart
  type="line"
  series={[{ data: [10, 20, 30] }]}
  options={{ title: { text: 'Chart' } }}
/>
```

---

## 🔐 Authentication

### Login Flow

```typescript
// In login service
const login = async (email, password) => {
  const response = await api.post('/auth/sign-in', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

// Use in component
const handleLogin = async () => {
  try {
    await login(email, password);
    router.push('/dashboard');
  } catch (error) {
    logger.error('Login failed', error);
  }
};
```

### Protected Routes

```typescript
// Routes are split into public and private
// See src/routes/sections.tsx
// Private routes only show if currentUser exists
```

---

## 📱 Responsive Breakpoints

```
xs: 0px     (mobile)
sm: 600px   (tablet)
md: 900px   (small desktop)
lg: 1200px  (desktop)
xl: 1536px  (large desktop)
```

---

## 🧪 Debugging

### Console Logging

```typescript
// Check navigation logs
console.log(logger.getLogs());

// Monitor state changes
console.log(data, isLoading, error);

// Track network requests
// Open DevTools > Network tab
```

### React DevTools

```
Install React DevTools Browser Extension
- Inspect component tree
- Monitor state changes
- View props
```

### Vue DevTools Alternatives

```
- Redux DevTools (if using Redux)
- React Query Devtools (included)
  - Shows cached queries
  - Network requests
  - Query status
```

---

## ⚡ Performance Tips

1. **Memoization**

   ```typescript
   import { memo } from 'react';
   const MyComponent = memo(({ prop }) => <div>{prop}</div>);
   ```

2. **useCallback**

   ```typescript
   const handleClick = useCallback(() => {
     // action
   }, [dependency]);
   ```

3. **useMemo**

   ```typescript
   const memoValue = useMemo(() => expensiveComputation(), [dep]);
   ```

4. **Code Splitting**
   ```typescript
   const Component = lazy(() => import('./Component'));
   ```

---

## 🐛 Common Errors & Fixes

| Error                               | Fix                                       |
| ----------------------------------- | ----------------------------------------- |
| "Cannot find module"                | Check import path, use `@/` alias         |
| "Hook must be inside function"      | Ensure hook is in component body          |
| "Cannot read property of undefined" | Add null checks, use optional chaining    |
| "Element not found"                 | Ensure root element exists in HTML        |
| "Not authorized"                    | Check token in localStorage, refresh auth |

---

## 📚 Documentation Files

| File                        | Purpose                        |
| --------------------------- | ------------------------------ |
| `PROJECT_GUIDE.md`          | Complete project guide         |
| `NAVIGATION_LOGGING.md`     | Detailed logging documentation |
| `LOGGING_QUICK_START.md`    | Quick logging reference        |
| `LOGGING_IMPLEMENTATION.md` | Implementation details         |
| `CHANGELOG.md`              | Change summary                 |
| `QUICK_REFERENCE.md`        | This file                      |

---

## 🔗 Useful Links

- [Material-UI Docs](https://mui.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

---

## 💡 Tips & Tricks

```typescript
// Quick copy component structure
// 1. Create folder in src/components/my-component/
// 2. Create index.tsx
// 3. Create types if needed
// 4. Export from index.ts

// Useful keyboard shortcuts
// Cmd+Shift+P (macOS) / Ctrl+Shift+P (Windows) - Command palette
// Cmd+/ (macOS) / Ctrl+/ (Windows) - Toggle comment

// Run specific lint rule
npm run lint -- --fix --rule "no-unused-vars"
```

---

**Last Updated**: January 17, 2026

**Quick Reference Version**: 1.0
