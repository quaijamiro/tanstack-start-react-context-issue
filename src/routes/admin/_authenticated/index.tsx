import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_authenticated/")({
  ssr: false,
  beforeLoad: ({ context }) => {
    console.log("index: beforeLoad: context:", context);

    return redirect({ to: "/admin/dashboard" });
  },
  component: Index,
});

function Index() {
  return <div>Hello "/admin/"!</div>;
}
