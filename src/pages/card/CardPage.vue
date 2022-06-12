<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="width: 500px">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ name }}
          </q-item-label>
          <q-item-label caption>
            {{ description }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-responsive :ratio="16 / 9">
        <img :src="image" />
      </q-responsive>
      <q-card-actions class="q-gutter-md">
        <q-btn to="/" color="primary" label="Go Back" />
        <q-space></q-space>
        <q-btn color="warning" label="Delete" />
        <q-btn color="positive" label="Edit" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue';
import { useCardPageStore, useContext } from './composables';

const store = useCardPageStore();
onUnmounted(() => store.$dispose());

const { avatar, name, description, image, initialize } = useContext({ store });
await initialize();
</script>
