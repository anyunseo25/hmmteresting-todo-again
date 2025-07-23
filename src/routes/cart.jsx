import { useContext } from 'react';
import { CartContext } from './CartContext';
function Cart() {
  const { cart, removeFromCart, plusInCart } = useContext(CartContext);

  return (
    <div>
      <h2>내 카트</h2>
      {cart.length === 0 ? (
        <p>카트에 상품이 없습니다.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - {item.price} 원</p>
            <p>수량: {item.count}</p>
            <button onClick={() => plusInCart(item.id, item.count)}>추가</button>
            <button onClick={() => minusInCart(item.id, item.count)}>덜어내기</button>
            <button onClick={() => removeFromCart(item.id)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

