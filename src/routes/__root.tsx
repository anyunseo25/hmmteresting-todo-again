import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-[#AF55C4] h-[70px] text-purple-200 relative w-full">
        <Link
          to="/"
          className="absolute left-[120px] top-[50%] w-[142px] h-[37px] 
             bg-[#F6CDFF] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          새알(로고 넣기)
        </Link>
        <Link
          to="/"
          className="absolute left-[804px] top-[50%] w-[142px] h-[37px] 
             bg-[#F6CDFF] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          글쓰기
        </Link>
        <Link
          to="/"
          className="absolute left-[967px] top-[50%] w-[142px] h-[37px] 
             bg-[#F6CDFF] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          마이페이지
        </Link>
        <Link
          to="/"
          className="absolute left-[1130px] top-[50%] w-[142px] h-[37px] 
             bg-[#F6CDFF] text-[#8A13A4] rounded-lg font-bold 
             hover:bg-[#8A13A4] hover:text-[#F6CDFF] cursor-pointer 
             transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center"
        >
          로그아웃
        </Link>
        {/* <Link to="/" className="[&.active]:font-bold " font-family="SBAggroB">
          일단 이게 홈 화면
        </Link>{" "}
        <Link to="/List" className="[&.active]:font-bold ">
          이건 따로 리스트 바로 가게 만들어 놓는 거
        </Link>
        <Link to="/index copy 2" className="[&.active]:font-bold">
          얘도 뭔가 있겠지
        </Link>
        <Link to="/index copy" className="[&.active]:font-bold">
          얘도 뭔가 할 일이 있겟지....
        </Link> */}
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});