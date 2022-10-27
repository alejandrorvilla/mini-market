import { IProduct } from "../model/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts as getProductsService } from "../services/product.services";

export interface IState {
  products: Array<IProduct>;
  selectedProductId?: number;
}

const initialState: IState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { dispatch }) => {
    const products = await getProductsService();
    dispatch(setProducts(products));
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    selectProduct: (state, { payload }) => {
      state.selectedProductId = payload;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;
