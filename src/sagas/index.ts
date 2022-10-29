import { takeLatest } from "redux-saga/effects";
import { loadProducts } from "../reducer/product/product.reducer";
import { clearMessage, loadTransaction } from "../reducer/transaction/transaction.reducer";
import tryClearCart from "./cart/cart.sagas";
import tryProductsList from "./product/product.sagas";
import tryTransaction from "./transaction/transaction.sagas";

export default function* rootSaga() {
  yield takeLatest(loadProducts.type, tryProductsList);
  yield takeLatest(loadTransaction.type, tryTransaction);
  yield takeLatest(clearMessage.type, tryClearCart);
}
