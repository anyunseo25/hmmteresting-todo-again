import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex p-2 flex gap-2 flex w-full">
        <Link to="/" className="[&.active]:font-bold" font-family="SBAggroB">
          일단 이게 홈 화면
        </Link>{' '}
        <Link to="/List" className="[&.active]:font-bold">
          이건 따로 리스트 바로 가게 만들어 놓는 거
        </Link>
        <Link to="/index copy 2" className="[&.active]:font-bold">
          얘도 뭔가 있겠지
        </Link>
        <Link to="/index copy" className="[&.active]:font-bold">
          얘도 뭔가 할 일이 있겟지....
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})