<template>
  <q-page class="col items-center justify-evenly">
    <q-file filled bottom-slots v-model="file" label="Upload Photo" counter max-files="12">
      <template v-slot:before>
        <q-icon name="folder_open" />
      </template>

      <template v-slot:hint> Image upload </template>

      <template v-slot:append>
        <q-btn round dense flat icon="add" @click.stop.prevent @click="upload" />
      </template>
    </q-file>

    <h5>Hola usuario</h5>
    <photo-list title="Photo List" active />
  </q-page>
</template>

<script lang="ts" setup>
import PhotoList from 'components/PhotoList.vue';
import { useQuasar } from 'quasar';
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';

const $q = useQuasar();
const userStore = useUserStore();
const file = ref<File | null>(null);
const upload = async () => {
  try {
    $q.loading.show({
      message: 'Uploading image...',
    });

    await userStore.addImage(file.value);

    $q.loading.hide();
    $q.notify({
      type: 'positive',
      position: 'top',
      icon: 'check_circle',
      message: 'Your image is loaded!',
    });
  } catch (error) {
    $q.loading.hide();
    $q.dialog({
      title: 'Uploading failed',
      message: 'Your photo could not be uploaded.',
      persistent: true,
    });
    console.log(error);
  }
};
</script>
