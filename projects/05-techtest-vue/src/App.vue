<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { auth } from './boot/firebase';
import { useUserStore } from './stores/user-store';
import { useQueryProvider } from 'vue-query';

useQueryProvider();
const userStore = useUserStore();

onAuthStateChanged(auth, (user) => {
  /* console.log(user); */
});

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) userStore.setUser({ email: user.email, uid: user.uid });
    else userStore.clearUser();
  });
});

const name = 'App';
</script>
