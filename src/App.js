import React from "react";
import { CartPage } from "./pages/CartPage";
import { useProducts } from "./hooks/useProducts.hook";

function App() {
  const { initialCart } = useProducts();
  return <CartPage initialCart={initialCart} />;
}

export default App;
