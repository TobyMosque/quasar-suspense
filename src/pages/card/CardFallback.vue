<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="width: 500px">
      <q-item>
        <q-item-section avatar>
          <q-skeleton type="QAvatar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <q-skeleton type="text" />
          </q-item-label>
          <q-item-label caption>
            <q-skeleton type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-responsive :ratio="16 / 9">
        <q-skeleton height="200px" square />
      </q-responsive>
      <q-card-actions align="right" class="q-gutter-md">
        <q-btn to="/" color="primary" label="Go Back" />
        <q-space></q-space>
        <q-skeleton type="QBtn" />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useCardPageStore, useContext } from './composables';

const store = useCardPageStore();
useContext({ store });
// extract from the context only what u'll use in this setup
// const { avatar, name, description, image, loading, initialize } = context
</script>
