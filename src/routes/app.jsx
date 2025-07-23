
import { CartProvider } from './CartContext';
import ProductList from './product';
import Cart from './cart';
function App() {
  return (
    <CartProvider>
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;