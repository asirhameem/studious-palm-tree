const QuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex border border-gray-400 rounded overflow-hidden h-9">
      <button
        onClick={onDecrease}
        className="w-10 flex items-center justify-center text-lg border-r border-gray-400 hover:bg-gray-100 focus:outline-none"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <span className="w-10 flex items-center justify-center text-base font-medium select-none">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-10 flex items-center justify-center text-lg border-l border-gray-400 hover:bg-gray-100 focus:outline-none"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export { QuantitySelector };
