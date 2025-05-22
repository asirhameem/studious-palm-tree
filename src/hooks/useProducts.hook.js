export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pi Pizza Oven",
      description: "Fuel Source: Wood Only",
      price: 469.99,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "Estimated Ship Date: June 6th",
      freeWith: null,
    },
    {
      id: 2,
      name: "Grill Ultimate Bundle",
      description: "",
      price: 549.99,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      freeWith: null,
    },
    {
      id: 3,
      name: "Starters (4 pack)",
      description: "",
      price: 0.0,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      freeWith: 1,
    },
    {
      id: 4,
      name: "Charcoal Grill Pack",
      description: "",
      price: 0.0,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      freeWith: 2,
    },
  ];

  const initialCart = [products[0], products[1]];

  const getProductById = (id) => products.find((item) => item.id === id);

  const getFinalCart = (userCart) => {
    let cart = [...userCart];

    userCart.forEach((mainProduct) => {
      products.forEach((product) => {
        if (product.freeWith === mainProduct.id) {
          cart.push({ ...product, quantity: mainProduct.quantity });
        }
      });
    });

    // Remove duplicates by id (main product takes precedence)
    const cartMap = new Map();
    cart.forEach((item) => {
      cartMap.set(item.id, item);
    });

    return Array.from(cartMap.values());
  };

  return { products, initialCart, getProductById, getFinalCart };
};
