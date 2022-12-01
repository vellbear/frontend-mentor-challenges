import React from "react";
import { useStore } from "@nanostores/react";
import { showMenu } from "../stores/menuStore.js";
import { showCart } from "../stores/cartStore.js";
import { totalQuantity } from "../stores/cartStore.js";

function Navbar() {
  const $showMenu = useStore(showMenu);
  const $showCart = useStore(showCart);
  const $totalQuantity = useStore(totalQuantity);

  return (
    <div className="bg-white py-5 px-6 pb-[1.5rem] w-full">
      <nav>
        <div className="flex">
          <div className="flex gap-4">
            <button
              onClick={() => {
                showMenu.set(!$showMenu);
              }}
            >
              <img src="/images/icon-menu.svg" alt="icon-menu" />
            </button>
            <a href="#">
              <img src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="flex gap-[1.375rem] ml-auto">
            <button
              onClick={() => {
                showCart.set(!$showCart);
              }}
            >
              <div className="grid relative">
                {$totalQuantity > 0 ? (
                  <div className="grid place-content-center absolute -top-1 -right-1 bg-orange-500 h-3 w-3 rounded-full z-10">
                    <p className="text-[.5rem] font-bold">
                      {$totalQuantity ? $totalQuantity : 0}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <img src="/images/icon-cart.svg" alt="icon-cart" />
                </div>
              </div>
            </button>
            <button>
              <img
                src="/images/image-avatar.png"
                alt="image-avatar"
                height="24px"
                width="24px"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
