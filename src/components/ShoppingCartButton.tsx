import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../resources/styles/components/shoppingCartButton.css";

function ShoppingCartButton(props: Props) {
  const { total } = props;
  return (
    <div className="shopping-cart">
      <FaShoppingCart />
      <div>{`$${total}`}</div>
    </div>
  );
}

interface Props {
  total: number;
}

export default ShoppingCartButton;
