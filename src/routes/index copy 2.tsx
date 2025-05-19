import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/index copy 2')({
  component: ibbal,
})

function ibbal() {
  return (
    <div className="p-2">
      <h3>Welcome ibbal!</h3>
    </div>
  )
}