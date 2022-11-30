import React from "react";

function CartModal(props) {
  return (
    <div
      className="z-40 fixed w-[360px] right-2 mt-2 bg-white rounded-xl shadow-lg"
      style={{ display: `${props.showModal ? "inline-block" : "none"}` }}
    >
      <div className="border-b-[1px] border-blue-300 py-6 pl-6">
        <h3 className="font-bold leading-none">Cart</h3>
      </div>
      <div className="min-h-[190px] grid items-center">
        <span className="text-center font-bold text-blue-400">
          Your cart is empty.
        </span>
      </div>
    </div>
  );
}

export default CartModal;
