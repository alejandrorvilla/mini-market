import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Utilities from "../../utilities/Utilities";
import "../../resources/styles/components/shoppingCartButton.css";
import { setActive } from "../../reducer/cart/cart.reducer";
import { IReducer } from "../../store";

function ShoppingCartButton(props: IProps & IPropsEvents) {
  const { active, total, onClick } = props;
  return (
    <div data-testid="cart-btn" className="shopping-cart" onClick={() => onClick()}>
      <div className={`total ${active ? "active" : ""}`}>
        <FaShoppingCart />
        <span>{Utilities.formatPrice(total)}</span>
      </div>
      {active && (
        <div className="close">
          <IoCloseSharp />
        </div>
      )}
    </div>
  );
}

interface IProps {
  total: number;
  active: boolean;
}

interface IPropsEvents {
  onClick: () => void;
}

const mapStateToProps = (state: IReducer, props: { total: number }) => ({
  total: props.total,
  active: state.cart.active,
});

const mapDispatchToProps = (dispatch: Dispatch): IPropsEvents =>
  bindActionCreators(
    {
      onClick: setActive,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartButton);
