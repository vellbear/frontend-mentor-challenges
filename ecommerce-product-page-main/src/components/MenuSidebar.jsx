import { useStore } from "@nanostores/react";
import { showMenu } from "../stores/menuStore.js";

function MenuSidebar() {
  const $showMenu = useStore(showMenu);

  const Link = (props) => {
    return (
      <li>
        <a
          className="focus:border-b-2 hover:border-b-2 border-orange-500"
          href="#"
        >
          {props.title}
        </a>
      </li>
    );
  };
  return (
    <div
      className="z-50 fixed h-screen w-full bg-black"
      style={{ display: $showMenu ? "inline-block" : "none" }}
    >
      <div className="h-full w-[250px] p-6 bg-white">
        <button
          onClick={() => {
            showMenu.set(!$showMenu);
          }}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className=" ml-[2px] font-bold pt-14 tracking-wider leading-none">
          <ul className="grid gap-[1.875rem]">
            <Link title="Collections" />
            <Link title="Men" />
            <Link title="Women" />
            <Link title="About" />
            <Link title="Contact" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
