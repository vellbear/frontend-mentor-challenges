import { useState } from "react";

function MenuSidebar(props) {
  return (
    <div
      className="z-50 fixed h-screen w-full bg-black"
      style={{ display: `${props.showMenu ? "inline-block" : "none"}` }}
    >
      <div className="h-full w-[250px] p-6 bg-white">
        <div
          onClick={() => {
            props.setShowMenu(false);
          }}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="grid gap-[1.875rem] ml-[2px] font-bold pt-14 tracking-wider leading-none">
          <h3>Collections</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>About</h3>
          <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
