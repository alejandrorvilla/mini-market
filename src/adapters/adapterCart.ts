import { ICartItem, ICartProduct } from "../model/cart";
import { IProduct } from "../model/product";

export const createAdapterCart = (
  products: Array<IProduct>,
  cart: Array<ICartItem>
): Array<ICartProduct> => {
  let newCart: Array<ICartProduct> = [];
  if (products.length > 0) {
    newCart = cart.map((itemCart) => {
      const product = products.find(
        (product) => product.id === itemCart.productId
      ) as IProduct;
      return {
        ...itemCart,
        price: product.price,
        image: product.image,
        name: product.name,
      };
    });
  }

  return newCart;
};
