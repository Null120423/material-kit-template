import LoadingView from '@/components/loadingView';
import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from '@/layouts';

export const IndexPage = lazy(() => import('@/pages/private/app'));
export const LoginPage = lazy(() => import('@/pages/public/login'));
export const Page404 = lazy(() => import('@/pages/public/page-not-found'));
// ----------------------------------------------------------------------

function AuthRouter() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<LoadingView />}>
          <Outlet />
        </Suspense>
      ),
      children: [{ element: <LoginPage />, index: true }],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

function PrivateRouter() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingView />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'demo', element: <IndexPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

export { AuthRouter, PrivateRouter };
