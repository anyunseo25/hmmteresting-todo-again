import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/List')({
  component: MyPage,
})

function MyPage() {
  return <div>맛집 리스트
     <br /><br /><Link to="/List/1" className="[&.active]:font-bold">
          1. 영도씨
        </Link>
           <br />     <br /><Link to="/List/2" className="[&.active]:font-bold">
          2. 화궁방마라탕
        </Link>
        <br />     <br /><Link to="/List/3" className="[&.active]:font-bold">
          3. 정우림국밥
        </Link>
    
        <Outlet/>
          </div>
  
}