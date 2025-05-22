import React from "react";
import { QuantitySelector } from "./QuantitySelector";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <tr className="align-middle border-b border-gray-200 last:border-b-0">
      {/* Item image and details */}
      <td className="py-6 px-4">
        <div className="flex items-start">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            {/* Brand or subheading if present */}
            {item.brand && (
              <div className="text-xs font-semibold text-gray-500 mb-0.5">
                {item.brand}
              </div>
            )}
            <div className="font-extrabold text-xl leading-tight">
              {item.name}
            </div>
            {item.note && (
              <div className="font-bold text-orange-500 text-lg leading-tight">
                ({item.note})
              </div>
            )}
            {item.description && (
              <div className="text-sm text-gray-500 mt-0.5">
                {item.description}
              </div>
            )}
            {item.change && (
              <div className="text-xs text-orange-400 mt-0.5 cursor-pointer">
                Change
              </div>
            )}
            {item.extra && (
              <div className="inline-block mt-2 px-2 py-0.5 text-xs rounded bg-orange-100 text-orange-500 font-semibold">
                {item.extra}
              </div>
            )}
          </div>
        </div>
      </td>
      {/* Price */}
      <td className="py-6 px-4 text-lg font-medium text-gray-700 whitespace-nowrap align-middle">
        ${item.price.toFixed(2)}
      </td>
      {/* Quantity */}
      <td className="py-6 px-4 align-middle">
        {item.price > 0 ? (
          <QuantitySelector
            quantity={item.quantity}
            onDecrease={() => onQuantityChange(item.id, item.quantity - 1)}
            onIncrease={() => onQuantityChange(item.id, item.quantity + 1)}
          />
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-24 h-9 flex items-center justify-center border-b border-gray-400">
              <span className="text-gray-400 text-lg">1</span>
            </div>
          </div>
        )}
      </td>
      {/* Total */}
      <td className="py-6 px-4 text-lg font-medium text-gray-700 whitespace-nowrap align-middle">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
      {/* Remove button */}
      <td className="py-6 px-2 align-middle">
        {onRemove && item.price > 0 && (
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500 text-xl font-bold focus:outline-none"
            aria-label="Remove item"
          >
            ×
          </button>
        )}
      </td>
    </tr>
  );
};

export { CartItem };
