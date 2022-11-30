import React from "react";
import { useStore } from "@nanostores/react";
import { showMenu } from "../stores/menuStore.js";
import { showCart } from "../stores/cartStore.js";

function Navbar() {
  const $showMenu = useStore(showMenu);
  const $showCart = useStore(showCart);

  function NavImage(props) {
    return (
      <div className={`cursor-pointer ${props.class}`}>
        <img
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
        />
      </div>
    );
  }

  return (
    <div className="bg-white py-[1.375rem] px-6 pb-[1.5rem] w-full">
      <nav>
        <div className="flex">
          <div className="flex gap-4">
            <div
              onClick={() => {
                showMenu.set(!$showMenu);
              }}
            >
              <NavImage
                class="mt-[2px]"
                src="/images/icon-menu.svg"
                alt="icon-menu"
                className="mt-12"
              />
            </div>
            <a href="#">
              <NavImage class="-mt-[2px]" src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="flex gap-[1.375rem] ml-auto">
            <div
              onClick={() => {
                showCart.set(!$showCart);
              }}
            >
              <NavImage src="/images/icon-cart.svg" alt="icon-cart" />
            </div>
            <NavImage
              class="-mt-[2px]"
              src="/images/image-avatar.png"
              alt="image-avatar"
              height="24px"
              width="24px"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
