import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { ITransaction } from "../../model/transaction";
import {
  errorTransaction,
  processTransaction,
} from "../../reducer/transaction/transaction.reducer";
import { getTransaction } from "../../services/transaction/transaction.services";

export default function* tryTransaction(action: AnyAction) {
  try {
    const transaction: Promise<ITransaction> = yield call(
      getTransaction,
      action.payload
    );
    yield put({ type: processTransaction.type, payload: transaction });
  } catch {
    yield put({ type: errorTransaction.type });
  }
}
