
import SagaMiddleware from "redux-saga"
import { takeLatest } from "redux-saga/effects";
import { loadProducts } from "../reducer/product.reducer";
import tryProductsList from "./products/productSagas";

export default function* rootSaga() {
  yield takeLatest(loadProducts.type, tryProductsList);
}
