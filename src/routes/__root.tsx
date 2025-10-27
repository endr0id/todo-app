import { createRootRoute } from "@tanstack/react-router";

const RootLayout = () => (
  <>
    <div>dashboard</div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
