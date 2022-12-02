import React from "react";
import { useStore } from "@nanostores/react";
import { index, productImages, showLightbox } from "../stores/carouselStore";
import ChangeProductButton from "./ChangeProductButton";
import ThumbnailList from "./ThumbnailList";

function Lightbox() {
  const $index = useStore(index);
  const $productImages = useStore(productImages);
  const $showLightbox = useStore(showLightbox);
  return (
    <div
      className="hidden sm:justify-center my-auto bg-black h-full w-full m-0 absolute left-0 top-0"
      style={{ display: $showLightbox ? "grid" : "hidden" }}
    >
      <div className="h-fit self-center grid">
        <button
          onClick={() => {
            showLightbox.set(false);
          }}
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
