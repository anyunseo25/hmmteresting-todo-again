import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/index copy')({
  component: chingoo,
})

function chingoo() {
  return (
    <div className="p-2">
      <h3>Welcome chingoo!</h3>
    </div>
  )
}