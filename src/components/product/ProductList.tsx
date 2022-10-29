import React from "react";
import { IProduct } from "../../model/product";
import Product from "./Product";
import "../../resources/styles/components/productList.css";

function ProductList(props: IProps) {
  const { products, selectedProductId } = props;

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          selected={
            selectedProductId ? selectedProductId === product.id : false
          }
        />
      ))}
    </div>
  );
}

interface IProps {
  products: Array<IProduct>;
  selectedProductId?: number;
}

export default ProductList;
