import { defineStore } from 'pinia';

export const useIndexPageStore = defineStore('index-page', {
  actions: {
    async initialize() {
      await new Promise((resolve) => setTimeout(resolve, 200));
    },
  },
});
type IndexPageStore = ReturnType<typeof useIndexPageStore>;

export function useContext({ store }: { store: IndexPageStore }) {
  const { initialize } = store;
  return {
    initialize,
  };
}
