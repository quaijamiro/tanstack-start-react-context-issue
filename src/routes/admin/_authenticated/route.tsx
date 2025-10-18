import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_authenticated")({
  ssr: false,
  beforeLoad: ({ context }) => {
    console.log("pathless layout: beforeLoad: context:", context);
  },
  component: AdminRouteComponent,
});

function AdminRouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
