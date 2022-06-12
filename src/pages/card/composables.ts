import { defineStore, storeToRefs } from 'pinia';

export const useCardPageStore = defineStore('card-page', {
  state: () => ({
    avatar: '',
    name: '',
    description: '',
    image: '',
  }),
  actions: {
    async initialize() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.avatar = 'https://cdn.quasar.dev/img/boy-avatar.png';
      this.name = 'Avatar';
      this.description = "I'm the Boy Avatar";
      this.image = 'https://cdn.quasar.dev/img/mountains.jpg';
    },
  },
});
type IndexCardStore = ReturnType<typeof useCardPageStore>;

export function useContext({ store }: { store: IndexCardStore }) {
  const { avatar, name, description, image } = storeToRefs(store);
  const { initialize } = store;
  return {
    avatar,
    name,
    description,
    image,
    initialize,
  };
}
