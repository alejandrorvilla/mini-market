import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../model/cart";

const KEY = "CART_ITEMS";

const getLocalStorage = (key: string): Array<ICartItem> => {
  const local = localStorage.getItem(key);
  let data: Array<ICartItem> = [];
  if (local) {
    data = JSON.parse(local);
  }
  return data;
};

const setLocalStorage = (key: string, data: Array<ICartItem>) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export interface IState {
  cart: Array<ICartItem>;
  active: boolean;
}

const initialState: IState = {
  cart: getLocalStorage(KEY),
  active: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseItem: (state: IState, { payload }) => {
      let newItems = [...state.cart];
      const exist = newItems.some((item) => item.productId === payload);
      if (exist) {
        newItems = newItems.map((item) => {
          const quantity =
            item.productId === payload ? item.quantity + 1 : item.quantity;
          return { productId: item.productId, quantity };
        });
      } else {
        newItems.push({ productId: payload, quantity: 1 });
      }
      setLocalStorage(KEY, newItems);
      state.cart = newItems;
    },
    decreaseItem: (state: IState, { payload }) => {
      let newItems = state.cart.map((item) => {
        const quantity =
          item.productId === payload ? item.quantity - 1 : item.quantity;
        return { productId: item.productId, quantity };
      });
      newItems = newItems.filter((item) => item.quantity > 0);
      setLocalStorage(KEY, newItems);
      state.cart = newItems;
    },
    setActive: (state: IState) => {
      state.active = !state.active;
    },
    clearCart: (state: IState, { payload }) => {
      if (payload === "success") {
        setLocalStorage(KEY, []);
        state.cart = [];
      }
    },
  },
});

export const { increaseItem, decreaseItem, setActive, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
