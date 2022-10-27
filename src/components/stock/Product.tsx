import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IProduct } from "../../model/product";
import { IReducer } from "../../store/";
import { setActive } from "../../reducer/cart.reducer";
import { selectProduct } from "../../reducer/product.reducer";
import "../../resources/styles/components/product.css";
import Counter from "../base/Counter";

function Product(props: IProps & IPropsEvents) {
  const { product, selected, activeCartView, onClick, hideCartView } = props;
  const { quantity } = product;
  return (
    <div
      className={`product ${
        selected && !activeCartView ? "product-selected" : ""
      }`}
      onClick={() => {
        onClick(product.id);
        activeCartView && hideCartView();
      }}
    >
      <img src={product.image} alt={product.name} />
      {!!quantity && quantity > 0 && <Counter quantity={quantity} />}
    </div>
  );
}

interface IProps {
  product: IProduct;
  selected: boolean;
  activeCartView: boolean;
}

interface IPropsEvents {
  onClick: (productId: number) => void;
  hideCartView: () => void;
}

const mapStateToProps = (
  state: IReducer,
  props: { product: IProduct; selected: boolean }
): IProps => ({
  product: props.product,
  selected: props.selected,
  activeCartView: state.cart.active,
});

const mapDispatchToProps = (dispatch: Dispatch): IPropsEvents =>
  bindActionCreators(
    {
      onClick: selectProduct,
      hideCartView: setActive,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
