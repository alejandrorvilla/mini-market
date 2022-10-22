import React, { useState } from "react";
import IProduct from "../model/product";
import EmptyDetail from "./EmptyDetail";
import "../resources/styles/components/detail.css";

function ProductDetail(props: Props) {
  const { product } = props;
  const formatPrice = (price: number) => {
    const formater = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    });
    return formater.format(price).replace(/\ /g, "");
  };
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="detail">
      {product ? (
        <React.Fragment>
          <div className="content-img">
            <img src={product.image} alt={product.name} />
            {amount > 0 && <span className="counter">{amount}</span>}
          </div>
          <div className="amount">
            <div className="info">
              <span className="name">{product.name}</span>
              <span>•</span>
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="count">
              <button
                className="btn-decrease"
                type="button"
                onClick={() => setAmount(amount - 1)}
              >
                -
              </button>
              <button
                className="btn-increase"
                type="button"
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
        </React.Fragment>
      ) : (
        <EmptyDetail />
      )}
    </div>
  );
}

interface Props {
  product?: IProduct;
}

export default ProductDetail;
