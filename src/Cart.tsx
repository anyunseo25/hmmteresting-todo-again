import React, { useContext } from 'react';
import { CartContext } from './CartContext.tsx';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);


  return (
    <div value='CartContext'>
      <h2 className='text-blue-500'>내 카트</h2>
      {cart.length === 0 ? (
        <p>카트에 상품이 없습니다.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p className='text-blue-800'>{item.name} - {item.price} 원</p>
            <button className='text-blue-900' onClick={() => removeFromCart(item.id)}>삭제</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

