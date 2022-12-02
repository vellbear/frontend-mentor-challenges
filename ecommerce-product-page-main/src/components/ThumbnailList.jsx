import React from "react";
import Thumbnail from "./Thumbnail";

function ThumbnailList() {
  return (
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
  );
}

export default ThumbnailList;
