import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Bear {
  name: string;
  color: string;
}

// Podemos definir el tipo de los estados
interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  incrementBlackBears: (by: number) => void;
  decrementBlackBears: (by: number) => void;
  incrementPolarBears: (by: number) => void;
  decrementPolarBears: (by: number) => void;
  incrementPandaBears: (by: number) => void;
  decrementPandaBears: (by: number) => void;
  doNoting: () => void;
  bears: Bear[];
  addBear: (bear: Bear) => void;
  clearBears: () => void;
  computed: {
    totalBears: number;
  };
}

// Pasamos la interfaz de estado a un store
export const useBearStore = create<BearState>()(
  persist(
    (set, get) => ({
      blackBears: 10,
      polarBears: 5,
      pandaBears: 3,
      incrementBlackBears: (by: number) =>
        set((state) => ({ blackBears: state.blackBears + by })),
      decrementBlackBears: (by: number) =>
        set((state) => ({ blackBears: state.blackBears - by })),
      incrementPolarBears: (by: number) =>
        set((state) => ({ polarBears: state.polarBears + by })),
      decrementPolarBears: (by: number) =>
        set((state) => ({ polarBears: state.polarBears - by })),
      incrementPandaBears: (by: number) =>
        set((state) => ({ pandaBears: state.pandaBears + by })),
      decrementPandaBears: (by: number) =>
        set((state) => ({ pandaBears: state.pandaBears - by })),
      // Trabajar con objetos anidados useShallow
      bears: [
        {
          name: "Black Bear",
          color: "black",
        },
      ],
      addBear: (bear: Bear) =>
        set((state) => ({ bears: [...state.bears, bear] })),
      clearBears: () => set({ bears: [] }),
      doNoting: () => set((state) => ({ bears: [...state.bears] })),
      // De esta manera podemos trabajar con elementos computados, como por ejemplo el total de un carrito
      computed: {
        get totalBears() {
          return (
            get().blackBears +
            get().polarBears +
            get().pandaBears +
            get().bears.length
          );
        },
      },
    }),
    {
      name: "bear-state",
    },
  ),
);
