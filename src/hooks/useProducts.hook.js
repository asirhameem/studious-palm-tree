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
      free: [3],
      totalQuantity: 10,
    },
    {
      id: 2,
      name: "Grill Ultimate Bundle",
      description: "",
      price: 549.99,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      free: [4],
      totalQuantity: 10,
    },
    {
      id: 3,
      name: "Starters (4 pack)",
      description: "",
      price: 0.0,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      free: [],
      totalQuantity: 10,
    },
    {
      id: 4,
      name: "Charcoal Grill Pack",
      description: "",
      price: 0.0,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "",
      free: [],
      totalQuantity: 10,
    },
  ];

  const getProductById = (id) => products.find((item) => item.id === id);

  return { products, getProductById };
};
