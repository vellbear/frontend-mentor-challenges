import React from "react";

function Navbar() {
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
            <NavImage
              class="mt-[2px]"
              src="/images/icon-menu.svg"
              alt="icon-menu"
              className="mt-12"
            />
            <a href="#">
              <NavImage class="-mt-[2px]" src="/images/logo.svg" alt="logo" />
            </a>
          </div>
          <div className="flex gap-[1.375rem] ml-auto">
            <NavImage src="/images/icon-cart.svg" alt="icon-cart" />
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
