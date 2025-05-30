import { useState } from "react";
import { CartHeader } from "../components/cart/CartHeader";
import { CartItem } from "../components/cart/CartItem";
import { CartSummary } from "../components/cart/CartSummary";
import { useCart } from "../hooks/useCart.hook";

const CartPage = ({ initialCart }) => {
  const { getFinalCart, saleTax } = useCart();

  // Generate final cart with main products and free products
  const finalCart = getFinalCart(initialCart);

  // Create cart with selected products
  const [userCart, setUserCart] = useState(finalCart);

  // Calculate cart subtotal using userCart instead of finalCart
  const subtotal = userCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle quantity change (update quantity of main product and any associated free products)
  const handleQuantityChange = (id, newQuantity) => {
    setUserCart((cart) => {
      const newCart = cart.map((item) => {
        if (
          (item.id === id || item.freeWith === id) &&
          item.quantity < item.totalQuantity
        ) {
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      });
      return newCart;
    });
  };

  // Handle product remove (remove main product and any associated free products)
  const handleRemove = (id) => {
    setUserCart((cart) => {
      return cart.filter((item) => item.id !== id && item.freeWith !== id);
    });
  };

  return (
    <div className="container mx-auto p-6">
      <CartHeader userCart={userCart} />
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
            {userCart.map((item) => (
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
      <CartSummary subtotal={subtotal} tax={saleTax} />
    </div>
  );
};

export { CartPage };
