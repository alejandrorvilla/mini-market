import React from "react";
import IProduct from "../model/product";
import Product from "./Product";
import "../resources/styles/components/productList.css"

function ProductList(props: Props) {
  const { products, onSelectProduct } = props;
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          onClick={(product: IProduct) => onSelectProduct(product)}
        />
      ))}
    </div>
  );
}

interface Props {
  products: Array<IProduct>;
  onSelectProduct: (item: IProduct) => void;
}

export default ProductList;
