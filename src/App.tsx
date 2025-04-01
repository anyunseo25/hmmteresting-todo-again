import React from 'react';
import { CartProvider } from './CartContext.tsx';
import ProductList from './ProductList.tsx';
import Cart from './Cart.tsx';

function App() {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;