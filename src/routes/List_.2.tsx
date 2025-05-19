import { createFileRoute, Outlet } from '@tanstack/react-router'


export const Route = createFileRoute('/List_/2')({
  component: Chuga,
})

function Chuga() {
  return <div>여기에 뭔 내용을 적적을지 아세요? <Outlet /> </div>
}