<template>
  <q-page class="row items-center justify-evenly">
    <q-skeleton type="QBtn" />
  </q-page>
</template>

<script setup lang="ts">
import { useIndexPageStore, useContext } from './composables';

const store = useIndexPageStore();
useContext({ store });
</script>
