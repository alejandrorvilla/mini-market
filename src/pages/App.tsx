import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from "../components/base/Container";
import ProductDetail from "../components/detail/ProductDetail";
import Header from "../components/base/Header";
import ProductList from "../components/stock/ProductList";
import { getProducts, selectProduct } from "../reducer/product.reducer";
import { bindActionCreators, Dispatch } from "redux";
import { IProduct } from "../model/product";
import { IReducer } from "../store";
import { ICartItem } from "../model/cart";
import { decreaseItem, increaseItem, setActive } from "../reducer/cart.reducer";
import { createAdapterProduct } from "../adapters/adapterProduct";
import { createAdapterCart } from "../adapters/adapterCart";
import Utilities from "../utilities/Utilities";
import CartList from "../components/cart/CartList";
import { BiArrowBack } from "react-icons/bi";
import "../resources/styles/App.css";

function App(props: IProps & IPropsEvents) {
  const {
    products,
    selectedProductId,
    activeCartView,
    cart,
    loadProducts,
    increaseItem,
    decreaseItem,
    setProduct,
    changeActiveCart,
  } = props;
  const productsAdapted = createAdapterProduct(products, cart);
  const cartAdapted = createAdapterCart(products, cart);
  const total = Utilities.totalizer(cartAdapted);
  const containerRightActive = activeCartView || selectedProductId;
  const titleRight = activeCartView
    ? "Shopping Cart"
    : selectedProductId
    ? "Product"
    : "";
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <React.Fragment>
      <Header total={total} />
      <div className="content">
        <Container
          title="Store"
          className={`left-container ${containerRightActive ? "" : "active"}`}
        >
          <ProductList
            products={productsAdapted}
            selectedProductId={selectedProductId}
          />
        </Container>
        <Container
          title={titleRight}
          className={`right-container ${containerRightActive ? "active" : ""}`}
        >
          <button
            className="btn-back"
            type="button"
            onClick={() => {
              setProduct(null);
              activeCartView && changeActiveCart();
            }}
          >
            <BiArrowBack />
            Back
          </button>
          {activeCartView ? (
            <CartList products={cartAdapted} total={total} />
          ) : (
            <ProductDetail
              product={productsAdapted.find(
                (product) => product.id === selectedProductId
              )}
              onIncrease={increaseItem}
              onDecrease={decreaseItem}
            />
          )}
        </Container>
      </div>
    </React.Fragment>
  );
}

interface IProps {
  products: Array<IProduct>;
  selectedProductId?: number;
  cart: Array<ICartItem>;
  activeCartView: boolean;
}

interface IPropsEvents {
  loadProducts: () => void;
  increaseItem: (productId: number) => void;
  decreaseItem: (productId: number) => void;
  setProduct: (productId: number | null) => void;
  changeActiveCart: () => void;
}

const mapStateToProps = (state: IReducer) => ({
  products: state.product.products,
  selectedProductId: state.product.selectedProductId,
  cart: state.cart.cart,
  activeCartView: state.cart.active,
});

const mapDispatchToProps = (dispatch: Dispatch): IPropsEvents =>
  bindActionCreators(
    {
      loadProducts: getProducts,
      increaseItem: increaseItem,
      decreaseItem: decreaseItem,
      setProduct: selectProduct,
      changeActiveCart: setActive,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
