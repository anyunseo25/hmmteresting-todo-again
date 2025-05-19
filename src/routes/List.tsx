import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/List')({
  component: MyPage,
})

function MyPage() {
  return <div>리스트 일단 여기다 구현할 거예용
     <Link to="/List/1" className="[&.active]:font-bold">
          1
        </Link>
    <Link to="/List/2" className="[&.active]:font-bold">
          2
        </Link>
        <Outlet/>
          </div>
  
}