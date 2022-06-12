import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        components: {
          default: () => import('pages/index/IndexPage.vue'),
          fallback: () => import('pages/index/IndexFallback.vue'),
        },
      },
      {
        path: 'card',
        components: {
          default: () => import('pages/card/CardPage.vue'),
          fallback: () => import('pages/card/CardFallback.vue'),
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
