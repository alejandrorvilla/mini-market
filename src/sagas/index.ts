import { takeLatest } from "redux-saga/effects";
import { loadProducts } from "../reducer/product.reducer";
import { loadTransaction } from "../reducer/transaction.reducer";
import tryProductsList from "./product/productSagas";
import tryTransaction from "./transaction/transactionSagas";

export default function* rootSaga() {
  yield takeLatest(loadProducts.type, tryProductsList);
  yield takeLatest(loadTransaction.type, tryTransaction);
}
