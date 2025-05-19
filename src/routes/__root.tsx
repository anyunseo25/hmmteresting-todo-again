import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex p-2 flex gap-2 flex w-full">
        <Link to="/" className="[&.active]:font-bold" font-family="SBAggroB">
          Home
        </Link>{' '}
        <Link to="/List" className="[&.active]:font-bold">
          List
        </Link>
        <Link to="/index copy 2" className="[&.active]:font-bold">
          Board
        </Link>
        <Link to="/index copy" className="[&.active]:font-bold">
          chingoo
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})