import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/마이페이지/')({
  component: MyPage,
})

function MyPage() {
  return <div>마이페이지 여기다 구현할 거임 ㅇㅇ
   <Link to="/마이페이지/chuga">
            chuga </Link>
          </div>
  
}