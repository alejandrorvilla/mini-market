import { ICartProduct } from "../model/cart";

export default class Utilities {
  static totalizer(cartProducts: Array<ICartProduct>): number {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }

  static formatPrice(price: number): string {
    const formater = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    });
    return formater.format(price).replace(/\s/g, "");
  }
}
