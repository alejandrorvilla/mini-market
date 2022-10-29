import { AnyAction } from "redux";
import { put } from "redux-saga/effects";
import { clearCart } from "../../reducer/cart/cart.reducer";

export default function* tryClearCart(action: AnyAction) {
  yield put({ type: clearCart.type, payload: action.payload });
}
