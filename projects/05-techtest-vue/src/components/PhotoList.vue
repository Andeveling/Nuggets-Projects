<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occured: {{ error }}</div>
  <div v-else-if="data">
    <div v-for="photo in data" v-bind:key="photo">
      <img :src="photo" alt="photo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { useQuery, useQueryClient } from 'vue-query';

const userStore = useUserStore();
// Query Client
const queryClient = useQueryClient();

// Query hook
const { isLoading, isError, data, error } = useQuery<string[]>('images', userStore.getAllImages);
</script>
