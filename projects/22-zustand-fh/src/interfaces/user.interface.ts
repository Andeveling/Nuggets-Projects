export interface User {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
}

export type AuthStatus = "autorice" | "unauthorized" | "pending";
