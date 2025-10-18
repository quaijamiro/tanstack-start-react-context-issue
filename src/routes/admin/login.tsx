import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Login" }],
  }),
});

function RouteComponent() {
  return <div>Login form will be here...</div>;
}
