import React from "react";
import IProduct from "../model/product";
import "../resources/styles/components/product.css"

function Product(props: Props) {
  const { product, onClick } = props;
  return (
    <div className="product" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name}/>
    </div>
  );
}

interface Props {
  product: IProduct;
  onClick: (product: IProduct) => void
}

export default Product
