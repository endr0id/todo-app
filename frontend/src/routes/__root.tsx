import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import ToolBar from "../components/toolbar/ToolBar";
import Header from "../layouts/header/Header";

const queryClient = new QueryClient();

const RootLayout = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Header>
        <ToolBar />
      </Header>
      <Outlet />
    </QueryClientProvider>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
