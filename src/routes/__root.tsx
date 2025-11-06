import { Outlet, createRootRoute } from "@tanstack/react-router";
import ToolBar from "../components/toolbar/ToolBar";
import Header from "../layouts/header/Header";

const RootLayout = () => (
  <>
    <Header>
      <ToolBar />
    </Header>
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
