import { useStore } from "@nanostores/react";
import { index, showLightbox, productImages } from "../stores/carouselStore";
import ThumbnailList from "./ThumbnailList";
import ChangeProductButton from "./ChangeProductButton";

function Carousel() {
  const $index = useStore(index);
  const $showLightbox = useStore(showLightbox);
  const $productImages = useStore(productImages);

  return (
    <>
      <div className="sm:px-6">
        <div className="h-[300px] sm:h-[450px] sm:w-[450px] sm:rounded-2xl grid place-content-center overflow-hidden">
          <button
            className="hidden sm:inline-block col-start-1 row-start-1"
            onClick={() => showLightbox.set(true)}
          >
            <img
              className="transition-all ease-in-out duration-1000"
              src={$productImages[$index].src}
              alt={$productImages[$index].alt}
            />
          </button>
          <img
            className="sm:hidden col-start-1 row-start-1 transition-all ease-in-out duration-1000"
            src={$productImages[$index].src}
            alt={$productImages[$index].alt}
          />
          <ChangeProductButton
            src="/images/icon-previous.svg"
            alt="icon-previous"
            increment={true}
            onClick={() => decreaseIndex()}
          />
          <ChangeProductButton
            class="ml-auto"
            src="/images/icon-next.svg"
            alt="icon-next"
            increment={false}
            onClick={() => increaseIndex()}
          />
        </div>
        <ThumbnailList />
      </div>
    </>
  );
}

export default Carousel;
