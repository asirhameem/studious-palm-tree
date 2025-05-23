import { useProducts } from "./useProducts.hook";

export const useCart = () => {
  const saleTax = 102.0;
  const { products } = useProducts();

  const initialCart = [products[0], products[1]];

  const addToCart = (product) => {
    initialCart.push(product);
  };

  const getFinalCart = (userCart) => {
    let cart = [...userCart];

    userCart.forEach((mainProduct) => {
      if (Array.isArray(mainProduct.free) && mainProduct.free.length > 0) {
        mainProduct.free.forEach((freeId) => {
          const freeProduct = products.find((product) => product.id === freeId);
          if (freeProduct) {
            cart.push({
              ...freeProduct,
              quantity: mainProduct.quantity,
              freeWith: mainProduct.id,
            });
          }
        });
      }
    });

    return cart;
  };

  return { initialCart, getFinalCart, saleTax };
};
