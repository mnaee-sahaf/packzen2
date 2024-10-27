export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthError {
  message: string;
}

export interface User {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
}