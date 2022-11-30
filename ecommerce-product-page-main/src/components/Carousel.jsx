import React from "react";

function Carousel() {
  function ChangeProductButton(props) {
    return (
      <div
        className={`bg-white rounded-full h-10 w-10 mx-4 grid place-content-center col-start-1 row-start-1 self-center cursor-pointer ${props.class}`}
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
        className="col-start-1 row-start-1"
        src="/images/image-product-1.jpg"
        alt="product-1"
      />
      <ChangeProductButton
        src="/images/icon-previous.svg"
        alt="icon-previous"
      />
      <ChangeProductButton
        class="ml-auto"
        src="/images/icon-next.svg"
        alt="icon-next"
      />
    </div>
  );
}

export default Carousel;
