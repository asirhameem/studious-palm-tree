import React, { useState } from "react";
import { CartItem } from "../components/cart/CartItem";
import { CartSummary } from "../components/cart/CartSummary";
import { useProducts } from "../hooks/useProducts.hook";

const CartPage = ({ initialCart }) => {
  const { getFinalCart } = useProducts();

  // Create cart with selected products
  const [userCart, setUserCart] = useState(initialCart);

  // Generate final cart with main products and free products
  const finalCart = getFinalCart(userCart);

  // Calculate cart subtotal
  const subtotal = finalCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setUserCart((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Handle product remove
  const handleRemove = (id) => {
    setUserCart((cart) => cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Your Cart ({finalCart.length} items)
      </h2>
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left font-semibold text-gray-700 py-3 px-4 col-span-2">
                Item
              </th>
              <th className="text-left font-semibold text-gray-700 py-3 px-4">
                Price
              </th>
              <th className="text-left font-semibold text-gray-700 py-3 px-4">
                Quantity
              </th>
              <th className="text-left font-semibold text-gray-700 py-3 px-4">
                Total
              </th>
              <th className="py-3 px-2"></th>
            </tr>
          </thead>
          <tbody>
            {finalCart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={
                  !item.freeWith ? handleQuantityChange : undefined
                }
                onRemove={!item.freeWith ? handleRemove : undefined}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CartSummary subtotal={subtotal} tax={102.5} />
    </div>
  );
};

export { CartPage };
