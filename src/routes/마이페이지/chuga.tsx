import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/마이페이지/chuga')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/마이페이지/chuga"!</div>
}
