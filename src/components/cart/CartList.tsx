import React from "react";
import { ICartProduct } from "../../model/cart";
import Empty from "../base/Empty";
import CartProduct from "./CartProduct";
import Totalizer from "./Totalizer";
import WidgetPayment from "./WidgetPayment";
import Utilities from "../../utilities/Utilities";

function CartList(props: IProps) {
  const { products, total } = props;
  return (
    <div className="cart-list">
      {products.length > 0 ? (
        products.map((product) => (
          <CartProduct product={product} key={product.productId} />
        ))
      ) : (
        <Empty text="Please add a product in the cart." />
      )}
      <Totalizer total={Utilities.formatPrice(total)} />
      <WidgetPayment total={total} />
    </div>
  );
}

interface IProps {
  products: Array<ICartProduct>;
  total: number;
}

export default CartList;
