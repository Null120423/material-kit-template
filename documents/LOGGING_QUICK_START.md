# Quick Start: Navigation Logging

## For Developers

### See Navigation Logs

1. **Open Developer Console** (F12 or Cmd+Option+I)
2. **Click through the app** - you'll see colored logs:
   ```
   [INFO] Navigation: Link clicked
   [INFO] Route changed
   [DEBUG] Nav item active
   ```

### Log Custom Events

```typescript
import { logger } from '@/utils/logger';

// In any component
logger.info('User action', { action: 'clicked button', buttonId: 'submit' });
logger.warn('Performance issue', { renderTime: 234 });
```

### View All Navigation History

```typescript
// In browser console
import { logger } from '@/utils/logger';
console.table(logger.getLogs());
```

### Troubleshoot Navigation Issues

```typescript
// Get only navigation-related logs
const logs = logger
  .getLogs()
  .filter(
    (log) => log.message.includes('Navigation') || log.message.includes('Route')
  );
console.table(logs);
```

---

## Features at a Glance

| Feature                    | Status       | Where            |
| -------------------------- | ------------ | ---------------- |
| Route change logging       | ✅ Automatic | All routes       |
| Navigation link tracking   | ✅ Automatic | RouterLink       |
| Back/Forward logging       | ✅ Automatic | useRouter hook   |
| NavItem activity logging   | ✅ Automatic | Navigation menu  |
| Custom logging             | ✅ Manual    | logger utility   |
| Development console output | ✅ Dev only  | Browser console  |
| Memory log storage         | ✅ Automatic | Last 100 logs    |
| Production optimization    | ✅ Yes       | Disabled in prod |

---

## Common Tasks

### Track a specific user action

```typescript
router.push('/settings');
// Automatically logs: "Navigation: Navigating to route {href: '/settings'}"
```

### Monitor navigation performance

```typescript
const logs = logger.getLogs();
const navigationDurations = logs.filter(
  (log) => log.data?.from && log.data?.to
);
```

### Export logs for debugging

```typescript
const json = logger.exportLogs();
// Copy to file or send to backend
```

### Clear logs when memory is needed

```typescript
logger.clearLogs();
```

---

## Production Notes

In production builds:

- Logs are still collected but NOT printed to console
- No performance impact
- Useful for backend analytics if you add integration
- Safe to leave logging calls in code

---

## API Reference

### logger.info(message, data?)

Log general information

### logger.debug(message, data?)

Log debug details

### logger.warn(message, data?)

Log warnings

### logger.error(message, data?)

Log errors

### logger.getLogs()

Get array of all log entries

### logger.clearLogs()

Clear all stored logs

### logger.exportLogs()

Get logs as JSON string

---

**Need help?** Check `NAVIGATION_LOGGING.md` for detailed documentation.
