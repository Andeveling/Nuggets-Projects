<script lang="ts" setup>
import { useUserStore } from 'src/stores/user-store';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/login');
};
const goTo = () => router.push(`/account/${userStore.user.uid}`);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Tech Test </q-toolbar-title>
        <q-btn-group outline>
          <q-btn to="/" label="Home" />
          <q-btn v-if="userStore.user.email" @click="goTo" icon="account_circle" label="Account"> </q-btn>
          <q-btn v-else to="/login" icon="login" title="login" label="Login" />
          <q-btn v-if="!userStore.user.email" to="/register" icon="edit_note" title="register" label="Register" />

          <q-btn v-if="userStore.user.email" icon="logout" title="logout" label="logout" @click="logout" />
        </q-btn-group>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.nav-list {
  display: flex;
  gap: 8px;
}
</style>
