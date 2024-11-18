import { routeTree } from '@app/configs/router';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Suspense } from 'react';

const router = createRouter({
  routeTree,
  context: {
    queryClient: null,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const Router = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <RouterProvider router={router} />
  </Suspense>
);

export { Router };
