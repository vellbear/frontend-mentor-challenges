import React from "react";
import CartItem from "./CartItem";
import { useStore } from "@nanostores/react";
import { showCart, totalQuantity } from "../stores/cartStore";

function CartModal() {
  const $showCart = useStore(showCart);
  const $totalQuantity = useStore(totalQuantity);

  return (
    <div
      className="z-40 absolute w-[360px] right-2 mt-2 top-[68px] sm:mt-4 sm:-right-[54px] bg-white rounded-xl shadow-lg"
      style={{ display: $showCart ? "inline-block" : "none" }}
    >
      <div className="border-b-[1px] border-blue-300 py-6 pl-6">
        <h3 className="font-bold leading-none">Cart</h3>
      </div>
      <div className="min-h-[190px] grid items-center">
        {$totalQuantity > 0 ? (
          <CartItem />
        ) : (
          <span className="text-center font-bold text-blue-400">
            Your cart is empty.
          </span>
        )}
      </div>
    </div>
  );
}

export default CartModal;
