import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
    <div className=" bg-black">
      <Link to="/">. </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});