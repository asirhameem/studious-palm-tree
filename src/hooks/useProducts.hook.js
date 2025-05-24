export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: `<p class="text-2xl font-bold">Pi Pizza Oven</p>`,
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
      name: `<span class="text-2xl font-bold"><span class="text-sm">Solo Stove</span> <br /> Grill Ultimate Bundle</span>`,
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
      name: `<span class="text-2xl font-bold"><span class="text-sm">Solo Stove</span> <br /> Starters</span>`,
      description: "",
      price: 0.0,
      quantity: 1,
      image: "https://picsum.photos/200",
      note: "4 pack",
      free: [],
      totalQuantity: 10,
    },
    {
      id: 4,
      name: `<span class="text-2xl font-bold"><span class="text-sm">Solo Stove</span> <br /> Charcoal Grill Pack</span>`,
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
