import { atom } from "nanostores";

const index = atom(0);

const showLightbox = atom(false);

const productImages = atom([
  { src: "/images/image-product-1.jpg", alt: "product-1" },
  { src: "/images/image-product-2.jpg", alt: "product-2" },
  { src: "/images/image-product-3.jpg", alt: "product-3" },
  { src: "/images/image-product-4.jpg", alt: "product-4" },
]);

export { index, showLightbox, productImages };
