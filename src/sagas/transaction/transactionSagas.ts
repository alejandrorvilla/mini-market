import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { ITransaction } from "../../model/transaction";
import { processTransaction } from "../../reducer/transaction.reducer";
import { getTransaction } from "../../services/cart.services";

export default function* tryTransaction(action: AnyAction) {
  const transaction: Promise<ITransaction> = yield call(getTransaction, action.payload);
  try {
	yield put({ type: processTransaction.type, payload: transaction });
  } catch {
	yield put({ type: processTransaction.type, payload: transaction });
  }
}
