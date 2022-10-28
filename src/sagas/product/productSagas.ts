import { call, put } from "redux-saga/effects";
import { ICartProduct } from "../../model/cart";
import { setProducts } from "../../reducer/product.reducer";
import { getProducts } from "../../services/product.services";

export default function* tryProductsList() {
  const products: Promise<Array<ICartProduct>> = yield call(getProducts);
  yield put({ type: setProducts.type, payload: products });
}
