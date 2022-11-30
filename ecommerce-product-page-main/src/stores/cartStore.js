import { atom } from "nanostores";

const showCart = atom(false);

const quantity = atom(1);

export { showCart, quantity };
