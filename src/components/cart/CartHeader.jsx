const CartHeader = ({ userCart }) => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-6">
        Your Cart ({userCart.length} items)
      </h2>
    </div>
  );
};

export { CartHeader };
