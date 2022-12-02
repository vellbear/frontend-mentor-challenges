import React from "react";
import { useStore } from "@nanostores/react";
import { index } from "../stores/carouselStore";
import { productImages } from "../stores/carouselStore";

function ChangeProductButton(props) {
  const $index = useStore(index);
  const $productImages = useStore(productImages);

  function increaseIndex() {
    if ($index === $productImages.length - 1) {
      index.set(0);
      return;
    }
    const newIndex = $index + 1;
    index.set(newIndex);
  }
  function decreaseIndex() {
    if ($index === 0) {
      index.set($productImages.length - 1);
      return;
    }
    const newIndex = $index - 1;
    index.set(newIndex);
  }
  return (
    <div
      className={`bg-white sm:hidden rounded-full h-10 w-10 mx-4 grid place-content-center col-start-1 row-start-1 self-center cursor-pointer ${props.class}`}
      onClick={
        props.increment
          ? () => {
              increaseIndex();
            }
          : () => {
              decreaseIndex();
            }
      }
    >
      <button>
        <img src={props.src} alt={props.alt} height="10px" width="10px" />
      </button>
    </div>
  );
}

export default ChangeProductButton;
