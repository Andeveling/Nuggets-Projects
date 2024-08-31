import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
// ---- use de middleware
// import { persist } from "zustand/middleware"
// ---- use de devtools
// import { devtools } from "zustand/middleware"
interface PersonState {
  firstName: string;
  lastName: string;
}

interface PersonActions {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

// Usamos el stateCreator para crear el store a parte de los middlewares
const storeApi: StateCreator<PersonState & PersonActions> = (set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (lastName: string) => set({ lastName }),
});

export const usePersonStore = create<PersonState & PersonActions>()(
  devtools(
    persist(storeApi, {
      name: "person-state",
      // storage: customFirebaseStorage, //customSessionStorage,
    }),
  ),
);
