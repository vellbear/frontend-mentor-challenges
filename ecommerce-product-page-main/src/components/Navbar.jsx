import React from "react";

function Navbar() {
  function NavImage(props) {
    return (
      <>
        <img
          src={props.src}
          alt={props.alt}
          height={props.height}
          width={props.width}
        />
      </>
    );
  }

  return (
    <div className="bg-white py-[1.375rem] px-6 pb-[1.5rem] opacity-50">
      <nav>
        <div className="flex">
          <div className="flex gap-4">
            <div className="mt-[2px]">
              <NavImage
                src="../../images/icon-menu.svg"
                alt="icon-menu"
                className="mt-12"
              />
            </div>
            <div className="-mt-[2px]">
              <NavImage src="../../images/logo.svg" alt="logo" />
            </div>
          </div>
          <div className="flex gap-[1.375rem] ml-auto">
            <div>
              <NavImage src="../../images/icon-cart.svg" alt="icon-cart" />
            </div>
            <div className="-mt-[2px]">
              <NavImage
                src="../../images/image-avatar.png"
                alt="image-avatar"
                height="24px"
                width="24px"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
