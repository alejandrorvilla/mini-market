import React from "react";
import { ICartProduct } from "../../model/cart";
import Counter from "../base/Counter";
import "../../resources/styles/components/cartProduct.css"

function CartProduct(props: IProps) {
  const { product } = props;
  return (
    <div className="cart-product">
      <Counter quantity={product.quantity} />
	  <img src={product.image} alt={product.name} />
    </div>
  );
}

interface IProps {
  product: ICartProduct;
}

export default CartProduct;
