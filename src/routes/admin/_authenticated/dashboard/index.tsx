import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/_authenticated/dashboard/")({
  ssr: false,
  beforeLoad: ({ context }) => {
    console.log("dashboard: beforeLoad: context:", context);
  },
  component: Dashboard,
});

function Dashboard() {
  return (
    <>
      <div>Hello "/admin/dashboard/"!</div>
    </>
  );
}
