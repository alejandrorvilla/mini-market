import { ICartItem } from "../model/cart";
import { IProduct } from "../model/product";

export const createAdapterProduct = (
  products: Array<IProduct>,
  cart: Array<ICartItem>
): Array<IProduct> => {
  const newProducts = products.map((product) => {
    const cartItem = cart.find((item) => item.productId === product.id);
    return { ...product, quantity: cartItem ? cartItem.quantity : 0 };
  });

  return newProducts;
};
