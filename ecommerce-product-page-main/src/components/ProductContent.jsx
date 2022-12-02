import React from "react";

function ProductContent() {
  return (
    <div className="px-6 pt-6 grid gap-[1.125rem] bg-white">
      <h1 class="text-orange-500 font-bold uppercase text-[.875rem] sm:tracking-widest tracking-[.14em] leading-none">
        Sneaker Company
      </h1>
      <h2 class="font-bold text-3xl sm:text-[2.75rem] sm:pb-4 sm:tracking-normal tracking-tight leading-none">
        Fall Limited Edition Sneakers
      </h2>
      <p className="tracking-tight text-blue-400 leading-[1.57rem]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex gap-x-6 gap-y-4 sm:flex-wrap font-bold items-center leading-none py-3">
        <p class="text-3xl leading-none">$125.00</p>
        <p class="text-orange-500 bg-orange-300 p-[6px] rounded-lg">50%</p>
        <p className="text-blue-300 line-through ml-auto leading-none sm:w-full">
          $250.00
        </p>
      </div>
    </div>
  );
}

export default ProductContent;
