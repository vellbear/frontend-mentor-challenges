import React from "react";
import { useStore } from "@nanostores/react";
import { index } from "../stores/carouselStore";

function Thumbnail(props) {
  const $index = useStore(index);
  return (
    <button
      key={$index}
      onClick={() => index.set(props.index)}
      className="h-[90px] w-[90px] rounded-xl overflow-hidden"
      style={{
        outline:
          $index === props.index ? "2px solid hsl(26, 100%, 55%)" : "none",
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{ opacity: $index === props.index ? "30%" : "100%" }}
      />
    </button>
  );
}

export default Thumbnail;
