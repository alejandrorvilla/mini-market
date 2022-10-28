import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartReducer, { IState as ICartState } from "../reducer/cart.reducer";
import productReducer, {
  IState as IProductState,
} from "../reducer/product.reducer";
import rootSaga from "../sagas";

export const store = (() => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      product: productReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
})();

export interface IReducer {
  product: IProductState;
  cart: ICartState;
}
