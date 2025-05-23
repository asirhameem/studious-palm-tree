const FreeShippingNotice = () => (
  <>
    <div className="flex items-center mt-4 mb-2 text-green-600 text-sm">
      <span>
        Congrats, you're eligible for{" "}
        <span className="font-bold">Free Shipping</span>
      </span>
      <svg
        className="w-5 h-5 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 13h2l1 2h13l1-2h2M5 13V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </svg>
    </div>

    <div className="border-t-2 border-green-400 mb-4"></div>
  </>
);

export { FreeShippingNotice };
