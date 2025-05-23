import { createFileRoute, Outlet } from '@tanstack/react-router'
import '../index.css';

export const Route = createFileRoute('/List_/3')({
  component: Chuga,
})

function Chuga() {
  return <div style={{ fontFamily: 'SBAggroB' }}>생긴지 얼마 안됐으나 가본다면 국밥의 프리미엄은 어떤 모습을 갖춰야 하는지 알 수 있습니다.. 가까워서 방문도 쉬워요. 전 소고기국밥만 먹어봤는데, 기존 소고기국밥이라면 생소할 수 있는 한방 재료들이 아낌없이 들어가 있어요. 국물을 먹어보면 몸보신되는 느낌이 제대로 들어요. 고기의 질도 미쳤고 양도 미쳐서 밥에 비벼먹고 따로 빼서 초장/들깨가루 등에 찍어먹기 충분합니다. <Outlet /> </div>
}