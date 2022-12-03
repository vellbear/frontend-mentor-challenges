import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { index, productImages } from "../stores/carouselStore";

function ChangeProductButton(props) {
  const $index = useStore(index);
  const $productImages = useStore(productImages);
  const [isHovered, setIsHovered] = useState(false);

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
    <button
      className={`bg-white rounded-full h-10 w-10 mx-4 grid place-content-center col-start-1 row-start-1 self-center ${props.class}`}
      style={{ height: props.size, width: props.size }}
      onClick={
        props.increment
          ? () => {
              increaseIndex();
            }
          : () => {
              decreaseIndex();
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.next ? (
        <svg viewBox="0 0 14 18" width="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke={isHovered ? "hsl(26, 100%, 55%)" : "#1D2026"}
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 14 18" width="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke={isHovered ? "hsl(26, 100%, 55%)" : "#1D2026"}
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

export default ChangeProductButton;
