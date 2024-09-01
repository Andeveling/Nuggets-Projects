import { StateCreator } from "zustand";

export interface DateSlice {
  eventDate: Date;
  eventTime: Date;
  eventYYYYMMDD: () => string;
  eventHHMM: () => string;
  setEventDate: (eventDate: Date) => void;
  setEventTime: (eventTime: Date) => void;
}

export const createDateSlice: StateCreator<DateSlice, [], [], DateSlice> = (
  set,
  get,
) => ({
  eventDate: new Date(),
  eventTime: new Date(),
  eventYYYYMMDD: () => get().eventDate.toISOString().split("T")[0],
  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, "0");
    const minutes = get().eventDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  },
  setEventDate: (eventDate: Date) => set({ eventDate }),
  setEventTime: (eventTime: Date) => set({ eventTime }),
});
