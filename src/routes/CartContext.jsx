import { createContext, useState } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const plusInCart = (productId, productCount) => {
    item => item.id === productId? productCount + 1 : productCount;};
    
    

  const minusInCart = (productId, productCount) => {
    item => item.id === productId? productCount = 0? productCount = 0 : productCount - 1: productCount;};
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, plusInCart, minusInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

