import { StateStorage, createJSONStorage } from "zustand/middleware";

// Personalizar el storage
// TODO: Usar el sessionStorage
const storageApi: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    return sessionStorage.getItem(name);
  },
  setItem: function (name: string, value: string): void {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void | Promise<void> {
    sessionStorage.removeItem(name);
  },
};

export const customFirebaseStorage = createJSONStorage(() => storageApi);
