import { createRootRoute } from "@tanstack/react-router";
import { css } from "../../styled-system/css";

const RootLayout = () => (
  <>
    <div className={css({ fontSize: "2xl" })}>dashboard</div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
