<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useUserStore } from '../stores/user-store';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const $q = useQuasar();

const email = ref('');
const password = ref('');
const isPwd = ref(false);

const login = async () => {
  if (!navigator.onLine) {
    $q.dialog({
      title: 'Offline',
      message: 'Your login was unsuccessful. Please make sure you are connection to the internet.',
      persistent: true,
    });
    return '';
  }
  $q.loading.show({
    message: 'Loading...',
  });
  try {
    await userStore.login({ email: email.value, password: password.value });

    $q.loading.hide();
    $q.notify({
      type: 'positive',
      position: 'top',
      icon: 'check_circle',
      message: 'Welcome, ' + userStore.user.email + '!',
    });
    router.push(`/account/${userStore.user.uid}`);
  } catch (error) {
    $q.loading.hide();
    $q.dialog({
      title: 'Login failed',
      message: 'Your login was unsuccessful. Please make sure that your details are correct.',
      persistent: true,
    });
    console.log(error);
  }
};
</script>

<template>
  <q-page v-if="userStore.user.email === null" class="row items-center justify-center">
    <q-form class="q-gutter-md">
      <q-input filled v-model="email" label="email" hint="your email here" lazy-rules :rules="[]" />
      <q-input label="Password" v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <div>
        <q-btn label="Login" @click.prevent="login" />
      </div>
    </q-form>
  </q-page>
</template>
