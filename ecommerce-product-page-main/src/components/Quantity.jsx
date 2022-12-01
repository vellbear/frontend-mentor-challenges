import React from "react";
import { useStore } from "@nanostores/react";
import { quantity } from "../stores/cartStore";
import { addToCart } from "../stores/cartStore";
import { showCart } from "../stores/cartStore";

function Quantity() {
  const $quantity = useStore(quantity);
  const $addToCart = useStore(addToCart);
  const $showCart = useStore(showCart);

  function increaseQuantity() {
    quantity.set($quantity + 1);
  }
  function decreaseQuantity() {
    if ($quantity === 0) return;
    quantity.set($quantity - 1);
  }

  function ChangeQuantityButton(props) {
    return (
      <>
        <button onClick={props.onClick} className="grid items-center">
          <img src={props.src} alt={props.alt} />
        </button>
      </>
    );
  }
  return (
    <div className="mx-6 mt-[18px] items-center">
      <div className="flex px-6 h-[45px] bg-blue-200 items-center justify-between w-full rounded-lg">
        <div className="h-3 w-3 grid self-center">
          <ChangeQuantityButton
            onClick={() => {
              decreaseQuantity();
              showCart.set(false);
              addToCart.set(false);
            }}
            src="/images/icon-minus.svg"
            alt="icon-minus"
          />
        </div>
        <div>
          <p className="font-bold">{$quantity}</p>
        </div>
        <div className="h-3 w-3 grid self-center">
          <ChangeQuantityButton
            onClick={() => {
              increaseQuantity();
              showCart.set(false);
              addToCart.set(false);
            }}
            class="ml-auto"
            src="/images/icon-plus.svg"
            alt="icon-plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Quantity;
