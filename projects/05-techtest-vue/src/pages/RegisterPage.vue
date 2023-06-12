<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ICredentials, useUserStore } from '../stores/user-store';

const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const $q = useQuasar();
const isPwd = ref(false);

const register = async () => {
  if (!navigator.onLine) {
    $q.dialog({
      title: 'Offline',
      message: 'Your registration was unsuccessful. Please make sure you are connection to the internet.',
      persistent: true,
    });
    return '';
  }
  $q.loading.show({
    message: 'Give us a sec to get you registered...',
  });

  try {
    // Register User
    await userStore.register({ email: email.value, password: password.value } as ICredentials);
    // Redirect
    $q.loading.hide();
    $q.notify({
      type: 'positive',
      position: 'top-left',
      icon: 'check_circle',
      message: 'Welcome, ' + userStore.user.email + '!',
    });
    router.push('/');
  } catch (error) {
    $q.loading.hide();
    $q.dialog({
      title: 'Registration failed',
      message: 'Your registration was unsuccessful. Please make sure that your details are correct.',
      persistent: true,
    });
    console.log(error);
  }
};
</script>

<template>
  <q-page class="row items-center justify-center">
    <q-form class="q-gutter-md">
      <q-input filled label="email" v-model="email" hint="your email here" lazy-rules :rules="[]" />
      <q-input filled label="Password" v-model="password" :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <div>
        <q-btn label="Register" @click.prevent="register" />
      </div>
    </q-form>
  </q-page>
</template>
