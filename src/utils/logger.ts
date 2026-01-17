/**
 * Logger utility for tracking navigation and application events
 */

type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

const LogLevel = {
  DEBUG: 'DEBUG' as const,
  INFO: 'INFO' as const,
  WARN: 'WARN' as const,
  ERROR: 'ERROR' as const,
};

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: Record<string, unknown>;
}

class Logger {
  private logs: LogEntry[] = [];
  private maxLogs = 100;
  private isDevelopment = import.meta.env.DEV;

  private createLogEntry(
    level: LogLevel,
    message: string,
    data?: Record<string, unknown>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    };
  }

  private log(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    if (this.isDevelopment) {
      const style = this.getConsoleStyle(entry.level);
      console.log(
        `%c[${entry.level}] ${entry.message}`,
        style,
        entry.data || ''
      );
    }
  }

  private getConsoleStyle(level: LogLevel): string {
    const styles: Record<LogLevel, string> = {
      [LogLevel.DEBUG]: 'color: #999; font-size: 12px;',
      [LogLevel.INFO]: 'color: #0066cc; font-weight: bold;',
      [LogLevel.WARN]: 'color: #ff9900; font-weight: bold;',
      [LogLevel.ERROR]: 'color: #cc0000; font-weight: bold;',
    };
    return styles[level] || '';
  }

  debug(message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.DEBUG, message, data));
  }

  info(message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.INFO, message, data));
  }

  warn(message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.WARN, message, data));
  }

  error(message: string, data?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.ERROR, message, data));
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  clearLogs(): void {
    this.logs = [];
  }

  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

export const logger = new Logger();
export default logger;
