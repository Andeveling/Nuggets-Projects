import { StateCreator } from "zustand";
import type { User, AuthStatus } from "../../interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthService } from "../../services/auth.services";
import { devtools } from "zustand/middleware";

export interface AuthState {
  status: AuthStatus;
  user?: User;
  token?: string;
  loginUser: (email: string, password: string) => Promise<void>;
  checkStatus: () => Promise<void>;
  logoutUser: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({
  status: "pending",
  user: undefined,
  token: undefined,
  loginUser: async (email: string, password: string) => {
    try {
      const { token, ...user } = await AuthService.login(email, password);
      set({ status: "autorice", user, token });
    } catch (error) {
      set({ status: "unautorized", token: undefined, user: undefined });
    }
  },
  checkStatus: async () => {
    try {
      const { token, ...user } = await AuthService.checkStatus();
      set({ status: "autorice", user, token });
    } catch (error) {
      set({ status: "unautorized", token: undefined, user: undefined });
    }
  },
  logoutUser: () => {
    set({ status: "pending", user: undefined, token: undefined });
  },
});

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(storeApi, {
      name: "auth-store",
      getStorage: () => sessionStorage,
    }),
  ),
);
