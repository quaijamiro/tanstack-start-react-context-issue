import {
  HeadContent,
  Outlet,
  RouterContextProvider,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import type { QueryClient } from "@tanstack/react-query";

import type { AdminAuthContext } from "@/utils/providers/admin-auth-provider.tsx";
import { AdminAuthProvider, useAdminAuth } from "@/utils/providers/admin-auth-provider.tsx";

interface RouterContext {
  queryClient: QueryClient;
  adminAuth: AdminAuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Tanstack Start React Context Issue",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <AdminAuthProvider>
        <InnerApp />
      </AdminAuthProvider>
    </RootDocument>
  );
}

function InnerApp() {
  const adminAuth = useAdminAuth();
  const router = useRouter();

  return (
    <RouterContextProvider router={router} context={{ adminAuth }}>
      <Outlet />
    </RouterContextProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackRouterDevtools />
        <TanStackQueryLayout />
        <Scripts />
      </body>
    </html>
  );
}
