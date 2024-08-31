import { StateStorage, createJSONStorage } from "zustand/middleware";

const FirebaseUrl = "https://zustand-5673f-default-rtdb.firebaseio.com";

const firebaseApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      const data = await fetch(`${FirebaseUrl}/${name}.json`).then((res) =>
        res.json(),
      );
      return data[name] ?? null;
    } catch (error) {
      console.log(error);
    }
  },
  setItem: async function (name: string, value: string): Promise<void> {
    try {
      await fetch(`${FirebaseUrl}/${name}.json`, {
        method: "PUT",
        body: value,
      }).then((res) => res.json());
      return;
    } catch (error) {
      console.log(error);
    }
  },
  removeItem: async function (name: string): Promise<void> {
    try {
      await fetch(`${FirebaseUrl}/${name}.json`, {
        method: "DELETE",
      }).then((res) => res.json());
      return;
    } catch (error) {
      console.log(error);
    }
  },
};

export const customFirebaseStorage = createJSONStorage(() => firebaseApi);
