<template>
  <q-page class="row items-center justify-evenly">
    <q-btn to="/card" color="positive" label="Go To Card Page" />
  </q-page>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useIndexPageStore, useContext } from './composables';

const store = useIndexPageStore();
onUnmounted(() => store.$dispose());

const { initialize } = useContext({ store });
await initialize();
</script>
