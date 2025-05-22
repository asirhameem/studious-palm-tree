import React, { useState } from "react";

const CouponInput = ({ onApply }) => {
  const [code, setCode] = useState("");
  return (
    <div className="coupon-input">
      <input
        type="text"
        placeholder="Add Coupon"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={() => onApply(code)}>Apply</button>
    </div>
  );
};

export { CouponInput };
