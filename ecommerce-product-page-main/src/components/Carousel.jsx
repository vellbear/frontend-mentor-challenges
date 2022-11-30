import { useState } from "react";

function Carousel() {
  const [index, setIndex] = useState(0);
  const productImages = [
    { src: "/images/image-product-1.jpg", alt: "product-1" },
    { src: "/images/image-product-2.jpg", alt: "product-2" },
    { src: "/images/image-product-3.jpg", alt: "product-3" },
    { src: "/images/image-product-4.jpg", alt: "product-4" },
  ];

  function increaseIndex() {
    if (index === productImages.length - 1) {
      setIndex(0);
      return;
    }
    const newIndex = index + 1;
    setIndex(newIndex);
  }
  function decreaseIndex() {
    if (index === 0) {
      setIndex(productImages.length - 1);
      return;
    }
    const newIndex = index - 1;
    setIndex(newIndex);
  }

  function ChangeProductButton(props) {
    return (
      <div
        className={`bg-white rounded-full h-10 w-10 mx-4 grid place-content-center col-start-1 row-start-1 self-center cursor-pointer ${props.class}`}
        onClick={props.onClick}
      >
        <button>
          <img src={props.src} alt={props.alt} height="10px" width="10px" />
        </button>
      </div>
    );
  }
  return (
    <div className="h-[300px] grid place-content-center overflow-hidden">
      <img
        className="col-start-1 row-start-1 transition-all ease-in-out duration-1000"
        src={productImages[index].src}
        alt={productImages[index].alt}
      />
      <ChangeProductButton
        src="/images/icon-previous.svg"
        alt="icon-previous"
        onClick={() => increaseIndex()}
      />
      <ChangeProductButton
        class="ml-auto"
        src="/images/icon-next.svg"
        alt="icon-next"
        onClick={() => decreaseIndex()}
      />
    </div>
  );
}

export default Carousel;
