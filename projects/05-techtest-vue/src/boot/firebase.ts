import { initializeApp } from 'firebase/app';
import { Unsubscribe, User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { boot } from 'quasar/wrappers';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCneqIE6PA2KM4Hb91DMw514byKjkwuo_w',
  authDomain: 'tech-test-quasar.firebaseapp.com',
  projectId: 'tech-test-quasar',
  storageBucket: 'tech-test-quasar.appspot.com',
  messagingSenderId: '1078970531033',
  appId: '1:1078970531033:web:d95dd845a74eb03201d2c8',
};

export const getUserState = () => new Promise((resolve, reject) => onAuthStateChanged(getAuth(), resolve, reject));

export const useAuthState = () => {
  const user = ref<User | null>(null);
  const error = ref<Error | null>(null);

  const auth = getAuth();
  let unsubscribe: Unsubscribe;
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (error.value = e)
    );
  });
  onUnmounted(() => unsubscribe());

  const isAuthenticated = computed(() => user.value != null);

  return { user, error, isAuthenticated };
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };

export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
