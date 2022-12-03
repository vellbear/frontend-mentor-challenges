import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { index, productImages, showLightbox } from "../stores/carouselStore";
import ChangeProductButton from "./ChangeProductButton";
import ThumbnailList from "./ThumbnailList";

function Lightbox() {
  const $showLightbox = useStore(showLightbox);
  const $index = useStore(index);
  const $productImages = useStore(productImages);
  const [isHoveredClose, setIsHoveredClose] = useState(false);

  return (
    <div
      className="hidden sm:justify-center m-auto bg-black h-full w-full absolute left-0 top-0 z-50"
      style={{ display: $showLightbox ? "grid" : "none" }}
    >
      <div className="h-fit self-center grid">
        <button
          onClick={() => showLightbox.set(false)}
          onMouseEnter={() => setIsHoveredClose(true)}
          onMouseLeave={() => setIsHoveredClose(false)}
          className="justify-self-end self-end h-5 w-5 mb-6"
        >
          <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill={isHoveredClose ? "hsl(26, 100%, 55%)" : "#69707D"}
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="w-fit h-fit grid items-center">
          <div className="rounded-xl overflow-hidden col-start-1 row-start-1">
            <img
              className="transition-all ease-in-out duration-1000"
              src={$productImages[$index].src}
              alt={$productImages[$index].alt}
              height="550px"
              width="550px"
            />
          </div>
          <div className="grid col-start-1 row-start-1 -mx-11">
            <ChangeProductButton size="54px" increment={false} />
            <ChangeProductButton
              class="ml-auto"
              size="54px"
              next={true}
              increment={true}
            />
          </div>
        </div>
        <div className="justify-self-center">
          <ThumbnailList />
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
