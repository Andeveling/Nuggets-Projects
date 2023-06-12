import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { arrayUnion, collection, doc, getDoc, setDoc, updateDoc, arrayRemove } from 'firebase/firestore';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { auth, db, storage } from '../boot/firebase';

export interface IUser {
  uid: null | string;
  email: null | string;
}

export interface IGallery {
  images: string[];
}

export interface IState {
  user: IUser;
  gallery: IGallery;
}

export interface ICredentials {
  uid: string;
  email: string;
  password: string;
}

const usersRef = collection(db, 'users');

export const useUserStore = defineStore('user', {
  state: (): IState => ({
    user: {
      uid: null,
      email: null,
    },
    gallery: {
      images: [],
    },
  }),
  getters: {
    getMail: (state) => state.user.email,
    getUID: (state) => state.user.uid,
    getPhotos: (state) => state.gallery.images,
  },
  actions: {
    async register({ email, password }: ICredentials) {
      try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);

        if (credentials) {
          const {
            user: { email, uid },
          } = credentials;
          // const docRef = await addDoc(collection(db, 'users'), { uid, email, images: [] });
          await setDoc(doc(usersRef, uid), { uid, email, images: [] });
          this.setUser({ email, uid });
          /* console.log('Document written with ID: ', docRef.id); */
        }
        return credentials;
      } catch (error) {
        if (error) throw error;
      }
    },

    async login({ email, password }: ICredentials) {
      try {
        const loginSession = await signInWithEmailAndPassword(auth, email, password);
        if (loginSession) {
          const {
            user: { email, uid },
          } = loginSession;
          const userRef = doc(db, 'users', loginSession.user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            /* this.setUser({ images: userSnap.data().images }); */
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
          this.setUser({ uid, email });
        }
      } catch (error) {
        if (error) throw error;
      }
    },

    async logout() {
      signOut(auth)
        .then(() => this.clearUser())
        .catch((error) => {
          if (error) throw error;
        });
    },

    async addImage(file: any) {
      try {
        const folder = this.user.email;
        const idName = uuidv4();
        const userRef = doc(db, 'users', this.user.uid as string);
        const storageRef = ref(storage, `${folder}/${this.user.uid}${idName}`);

        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        await updateDoc(userRef, { images: arrayRemove(url) });
        console.log(url);
        console.log(response);
      } catch (error) {
        if (error) throw error;
      }
    },

    async getAllImages() {
      let results: string[] = [];
      const userRef = doc(db, 'users', this.user.uid as string);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        results = userSnap.data().images;
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
      await this.updateList();
      return results;
    },
    async updateList() {
      const folder = this.user.email;
      const userRef = doc(db, 'users', this.user.uid as string);
      if (folder) {
        await listAll(ref(storage, folder))
          .then((res) => {
            res.items.forEach(async (itemRef) => {
              const url = await getDownloadURL(itemRef);
              await updateDoc(userRef, { images: arrayUnion(url) });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    setUser(payload: IUser) {
      if (payload.email) this.user.email = payload.email;
      if (payload.uid) this.user.uid = payload.uid;
    },
    setGallery(payload: { url: string }) {
      if (payload.url) this.gallery.images = [...this.gallery.images, payload.url];
    },

    clearUser() {
      this.user.uid = null;
      this.user.email = null;
    },
    persist: true,
  },
});
