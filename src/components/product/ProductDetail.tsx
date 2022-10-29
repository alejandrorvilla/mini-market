import React from "react";
import { IProduct } from "../../model/product";
import Empty from "../base/Empty";
import Counter from "../base/Counter";
import "../../resources/styles/components/productDetail.css";
import Utilities from "../../utilities/Utilities";
import Button from "../base/Button";

function ProductDetail(props: IProps) {
  const { product, onIncrease, onDecrease } = props;
  const quantity = product && product.quantity ? product.quantity : 0;

  return (
    <div className="detail">
      {product ? (
        <React.Fragment>
          <div className="content-img">
            <img src={product.image} alt={product.name} />
            {quantity >= 0 && <Counter quantity={quantity} />}
          </div>
          <div className="amount">
            <div className="info">
              <span className="name">{product.name}</span>
              <span className="separator">•</span>
              <span className="price">
                {Utilities.formatPrice(product.price)}
              </span>
            </div>
            <div className="count">
              <Button
                className="btn-count"
                mode="gray"
                disabled={quantity <= 0}
                onClick={() => {
                  onDecrease(product.id);
                }}
              >
                -
              </Button>
              <Button
                className="btn-count"
                disabled={quantity >= product.stock}
                onClick={() => {
                  onIncrease(product.id);
                }}
              >
                +
              </Button>
            </div>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
        </React.Fragment>
      ) : (
        <Empty text="Please choose a product on the left." />
      )}
    </div>
  );
}

interface IProps {
  product?: IProduct;
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
}

export default ProductDetail;
