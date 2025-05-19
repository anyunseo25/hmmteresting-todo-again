import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>여기에 객체 네 개 정도 박아서 리스트 쫘라락 하는 거

        상자 네 개로 순위 같은 거 만들어 놓고, 거기 코드 누르면 성립하게

      </h3>
    </div>
  )
}