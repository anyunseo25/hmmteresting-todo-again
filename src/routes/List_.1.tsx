import { createFileRoute, Outlet } from '@tanstack/react-router'


export const Route = createFileRoute('/List_/1')({
  component: Chuga_copy,
})

function Chuga_copy() {
  return <div font-family='SBAggroB'>

    여기에 하나씩 추가해서 넣을 거구
    
  <Outlet /> </div>
}