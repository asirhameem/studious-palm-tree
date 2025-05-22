import React, { useState } from "react";
import { CouponInput } from "./CouponInput";
import { FreeShippingNotice } from "./FreeShippingNotice";

const CartSummary = ({ subtotal, tax, onApplyCoupon }) => {
  return (
    <div className="flex justify-end mt-8">
      <div className="w-full max-w-md">
        <div className="border-t border-b divide-y">
          <div className="flex justify-between py-3">
            <span className="font-semibold">Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="font-semibold">Sales Tax:</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <CouponInput />
          <div className="flex justify-between py-4">
            <span className="font-semibold text-lg">Grand total:</span>
            <span className="font-bold text-2xl">
              ${(subtotal + tax).toFixed(2)}
            </span>
          </div>
        </div>

        <FreeShippingNotice />
        {/* Checkout Button */}
        <button className="w-full bg-black text-white py-3 rounded text-lg font-semibold hover:bg-gray-800 transition">
          Check out
        </button>
      </div>
    </div>
  );
};

export { CartSummary };
