import React from "react";
import { useStore } from "@nanostores/react";
import { index, productImages, showLightbox } from "../stores/carouselStore";
import ChangeProductButton from "./ChangeProductButton";
import ThumbnailList from "./ThumbnailList";

function Lightbox() {
  const $showLightbox = useStore(showLightbox);
  const $index = useStore(index);
  const $productImages = useStore(productImages);

  return (
    <div
      className="sm:justify-center m-auto bg-black h-full w-full absolute left-0 top-0 z-50"
      style={{ display: $showLightbox ? "grid" : "none" }}
    >
      <div className="h-fit self-center grid">
        <button
          onClick={() => showLightbox.set(false)}
          className="justify-self-end self-end h-fit w-fit mb-6"
        >
          <img
            src="/images/icon-close.svg"
            alt="icon-close"
            height="20px"
            width="20px"
          />
        </button>
        <div className="w-fit h-fit grid items-center">
          <div className="rounded-xl overflow-hidden col-start-1 row-start-1">
            <img
              className="transition-all ease-in-out duration-1000"
              src={$productImages[$index].src}
              alt={$productImages[$index].alt}
              height="450px"
              width="450px"
            />
          </div>
          <ChangeProductButton
            src="/images/icon-previous.svg"
            alt="icon-previous"
            increment={true}
          />
          <ChangeProductButton
            class="ml-auto"
            src="/images/icon-next.svg"
            alt="icon-next"
            increment={false}
          />
        </div>
        <ThumbnailList />
      </div>
    </div>
  );
}

export default Lightbox;
