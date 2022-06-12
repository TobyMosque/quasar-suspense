import { defineComponent, h, Suspense, VNode } from 'vue';
import { RouterView, RouteLocationNormalized } from 'vue-router';

interface RouterViewArgs {
  route: RouteLocationNormalized;
  Component: VNode;
}

export default defineComponent({
  setup() {
    return () =>
      h(RouterView, null, {
        default({ route, Component }: RouterViewArgs) {
          if (Component) {
            const { matched, fullPath } = route;
            const { props, type } = Component;
            const match = matched.find(
              (m) => m.components?.default === type && m.components?.fallback
            );
            if (!match) {
              return h(Component);
            }
            const _default = match ? match.components.default : type;
            const fallback = match ? match.components.fallback : type;
            return h(
              Suspense,
              {
                key: fullPath,
              },
              {
                default() {
                  return h(_default as never, props);
                },
                fallback() {
                  return h(fallback as never, props);
                },
              }
            );
          }
        },
      });
  },
});
