import React from "react";
import { useStore } from "@nanostores/react";
import { totalQuantity } from "../stores/cartStore";
import Button from "./Button";

function CartItem() {
  const $totalQuantity = useStore(totalQuantity);

  return (
    <div className="h-full pl-6 pt-6 grid gap-2">
      <div className="flex gap-5 items-center">
        <div>
          <img
            src="/images/image-product-1-thumbnail.jpg"
            alt="product-thumbnail"
            height="48px"
            width="48px"
          />
        </div>
        <div className="font-bold text-blue-400">
          <span>Fall Limited Edition Sneakers</span>
          <p>
            $125.00 x {$totalQuantity}{" "}
            <span className="text-blue-800">
              {""}${$totalQuantity * 125}.00
            </span>
          </p>
        </div>
        <div onClick={() => totalQuantity.set(0)}>
          <img src="/images/icon-delete.svg" alt="icon-delete" />
        </div>
      </div>
      <Button title="Checkout" icon={true} marginLeft="0" />
    </div>
  );
}

export default CartItem;
