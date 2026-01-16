// Re-export theme types for convenience
export { SxPropsType } from 'g<0>';

// Global type definitions for the application

// ============================================================================
// Auth Types
// ============================================================================
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

// ============================================================================
// Redux State Types
// ============================================================================
export interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface ChatState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface ColumnState {
  columns: Column[];
  loading: boolean;
  error: string | null;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  status?: string;
  priority?: 'low' | 'medium' | 'high';
  assignee?: User;
  dueDate?: string;
  tags?: string[];
}

export interface TeamState {
  teams: Team[];
  loading: boolean;
  error: string | null;
}

export interface Team {
  id: string;
  name: string;
  members: User[];
  description?: string;
  createdAt?: string;
}

// ============================================================================
// API Response Types
// ============================================================================
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ============================================================================
// Common Types
// ============================================================================
export interface PageParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface Filter {
  field: string;
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'contains';
  value: any;
}

// ============================================================================
// MUI/Material-UI Extended Types
// ============================================================================
export interface ThemeConfig {
  palette?: any;
  typography?: any;
  components?: any;
}

// ============================================================================
// Component Props Types
// ============================================================================
export interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  type?: string;
  disabled?: boolean;
  [key: string]: any;
}

// ============================================================================
// Mock Data Types
// ============================================================================
export interface MockUser extends User {
  cover?: string;
  isVerified?: boolean;
  status?: 'active' | 'inactive';
  company?: string;
}

export interface MockProduct {
  id: string;
  title: string;
  price: number;
  rating: number;
  image?: string;
  colors?: string[];
  description?: string;
  category?: string;
}

export interface MockBlogPost {
  id: string;
  title: string;
  content: string;
  author?: User;
  createdAt: string;
  cover?: string;
  views?: number;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
}
