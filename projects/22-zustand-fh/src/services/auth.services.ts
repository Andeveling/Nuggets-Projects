import { AxiosError } from "axios";
import api from "../api/api";

export interface LoginResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

export class AuthService {
  static async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const res = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
      });
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  }

  static async checkStatus(): Promise<LoginResponse> {
    try {
      const res = await api.get<LoginResponse>("/auth/check-status");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}
