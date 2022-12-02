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
        className={`bg-white rounded-full h-10 w-10 mx-4 grid sm:hidden place-content-center col-start-1 row-start-1 self-center cursor-pointer ${props.class}`}
        onClick={props.onClick}
      >
        <button>
          <img src={props.src} alt={props.alt} height="10px" width="10px" />
        </button>
      </div>
    );
  }
  const Thumbnail = (props) => {
    return (
      <button
        onClick={() => setIndex(props.index)}
        className="h-[90px] w-[90px] rounded-xl overflow-hidden"
        style={{
          outline:
            index === props.index ? "2px solid hsl(26, 100%, 55%)" : "none",
        }}
      >
        <img
          src={props.src}
          alt={props.alt}
          style={{ opacity: index === props.index ? "30%" : "100%" }}
        />
      </button>
    );
  };
  return (
    <div className="sm:px-6">
      <div className="h-[300px] sm:h-[450px] sm:w-[450px] sm:rounded-2xl grid place-content-center overflow-hidden">
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
      <div className="hidden sm:flex gap-[30px] mt-8">
        <Thumbnail
          index={0}
          src="/images/image-product-1-thumbnail.jpg"
          alt="product-1-thumbnail"
        />
        <Thumbnail
          index={1}
          src="/images/image-product-2-thumbnail.jpg"
          alt="product-2-thumbnail"
        />
        <Thumbnail
          index={2}
          src="/images/image-product-3-thumbnail.jpg"
          alt="product-3-thumbnail"
        />
        <Thumbnail
          index={3}
          src="/images/image-product-4-thumbnail.jpg"
          alt="product-4-thumbnail"
        />
      </div>
    </div>
  );
}

export default Carousel;
