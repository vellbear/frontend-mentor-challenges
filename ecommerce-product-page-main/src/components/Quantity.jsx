import React from "react";

function Quantity() {
  function ChangeQuantityButton(props) {
    return (
      <>
        <button className="grid items-center">
          <img src={props.src} alt={props.alt} />
        </button>
      </>
    );
  }
  return (
    <div className="mx-6 mt-[18px] items-center">
      <div className="flex px-6 h-[45px] bg-blue-200 items-center justify-between w-full rounded-lg">
        <div className="h-3 w-3 grid self-center">
          <ChangeQuantityButton src="/images/icon-minus.svg" alt="icon-minus" />
        </div>
        <div>
          <p className="font-bold">0</p>
        </div>
        <div className="h-3 w-3 grid self-center">
          <ChangeQuantityButton
            class="ml-auto"
            src="/images/icon-plus.svg"
            alt="icon-plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Quantity;
