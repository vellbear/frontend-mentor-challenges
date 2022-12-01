import { atom } from "nanostores";

const showCart = atom(false);

const quantity = atom(0);

const addToCart = atom(false);

export { showCart, quantity, addToCart };
