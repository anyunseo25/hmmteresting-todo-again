import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
    <div className="text-white bg-black">
      <Link to="/"> CheckList </Link>
      <Link to="/calculator"> Calculator </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});