import React from "react";
import { CartPage } from "./pages/CartPage";
import { useCart } from "./hooks/useCart.hook";

function App() {
  const { initialCart } = useCart();
  return <CartPage initialCart={initialCart} />;
}

export default App;
