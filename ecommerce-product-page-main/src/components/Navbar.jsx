import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { showMenu } from "../stores/menuStore.js";
import { showCart, totalQuantity } from "../stores/cartStore.js";

function Navbar() {
  const $showMenu = useStore(showMenu);
  const $showCart = useStore(showCart);
  const $totalQuantity = useStore(totalQuantity);
  const [isHovered, setisHovered] = useState(false);

  const Navlink = (props) => {
    return (
      <li className="sm:h-full hover:border-b-4 hover:border-orange-500 text-blue-400 hover:text-blue-800 cursor-pointer">
        <a className="sm:grid sm:h-full" href="#">
          {props.name}
        </a>
      </li>
    );
  };

  return (
    <div className="bg-white py-5 sm:py-0 sm:h-[114px] sm:grid sm:items-center px-6 sm:px-0 pb-[1.5rem] sm:border-blue-200 sm:border-b-2 w-full">
      <nav className="sm:h-full sm:grid sm:items-center">
        <div className="flex sm:h-full">
          <div className="flex gap-4 items-center sm:h-full">
            <button
              className="sm:hidden"
              onClick={() => {
                showMenu.set(!$showMenu);
              }}
            >
              <img src="/images/icon-menu.svg" alt="icon-menu" />
            </button>
            <a href="#">
              <img src="/images/logo.svg" alt="logo" />
            </a>
            <div className="hidden sm:grid ml-9 sm:h-full sm:pt-[46px]">
              <ul className="flex gap-7">
                <Navlink name="Collections" />
                <Navlink name="Men" />
                <Navlink name="Women" />
                <Navlink name="About" />
                <Navlink name="Contact" />
              </ul>
            </div>
          </div>
          <div className="flex gap-[1.375rem] sm:gap-12 ml-auto mr-0">
            <button
              onClick={() => {
                showCart.set(!$showCart);
              }}
            >
              <div className="grid relative">
                {$totalQuantity > 0 ? (
                  <div className="grid place-content-center absolute -top-2 -right-2 bg-orange-500 px-2 rounded-full z-10">
                    <p className="text-[.625rem] font-bold text-white">
                      {$totalQuantity ? $totalQuantity : 0}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
                <div
                  onMouseEnter={() => setisHovered(true)}
                  onMouseLeave={() => setisHovered(false)}
                  onClick={() => setisHovered(!isHovered)}
                >
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill={
                        $showCart || isHovered
                          ? "hsl(220, 13%, 13%)"
                          : "#69707D"
                      }
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <button className="rounded-full focus:outline focus:outline-orange-500 focus:outline-2 hover:outline hover:outline-orange-500 hover:outline-2 h-fit my-auto">
              <img
                className="sm:w-12 sm:h-12"
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
