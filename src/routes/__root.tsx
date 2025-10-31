import { createRootRoute } from "@tanstack/react-router";
import ToolBar from "../components/toolbar/ToolBar";
import Header from "../layouts/header/Header";

const RootLayout = () => (
  <>
    <Header>
      <ToolBar />
    </Header>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
