import { useContext } from 'react';
import { CartContext } from './CartContext';

function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: '상품 A', price: 100, count: 1 },
    { id: 2, name: '상품 B', price: 200, count: 1 },
    { id: 3, name: '상품 C', price: 300, count: 1 }
  ];

  return (
    <div>
      <h2>상품 목록</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name} - {product.price} 원</p>
          <button onClick={() => addToCart(product)}>카트에 추가</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
