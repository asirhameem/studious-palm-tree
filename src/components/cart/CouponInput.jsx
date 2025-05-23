import { useState } from "react";

const CouponInput = ({ onApply }) => {
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [coupon, setCoupon] = useState("");

  const handleApply = () => {
    if (onApplyCoupon) onApplyCoupon(coupon);
    setShowCouponInput(false);
    setCoupon("");
  };

  return (
    <>
      <div className="flex justify-between py-3 items-center">
        <span className="font-semibold">Coupon Code:</span>
        <button
          className="text-gray-700 underline hover:text-black transition"
          onClick={() => setShowCouponInput((v) => !v)}
        >
          {showCouponInput ? "Hide" : "Add Coupon"}
        </button>
      </div>

      {showCouponInput && (
        <div className="flex items-center gap-2 py-3 px-2 bg-gray-50">
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      )}
    </>
  );
};

export { CouponInput };
