import { IProduct } from "../model/product";
import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  loading: boolean;
  products: Array<IProduct>;
  selectedProductId?: number;
}

const initialState: IState = {
  loading: false,
  products: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },
    setProducts: (state, payload) => {
      state.loading = false;
      state.products = payload.payload;
    },
    selectProduct: (state, { payload }) => {
      state.selectedProductId = payload;
    },
  },
});

export const { setProducts, selectProduct, loadProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
