import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { index } from "../stores/carouselStore";

function Thumbnail(props) {
  const $index = useStore(index);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      key={$index}
      onClick={() => index.set(props.index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-[90px] w-[90px] rounded-xl overflow-hidden bg-white"
      style={{
        outline:
          $index === props.index || isHovered
            ? "2px solid hsl(26, 100%, 55%)"
            : "none",
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{
          filter: $index === props.index ? "opacity(30%)" : "opacity(100%)",
        }}
      />
    </button>
  );
}

export default Thumbnail;
