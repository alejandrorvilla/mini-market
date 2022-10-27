import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { IState as ICartState }  from "../reducer/cart.reducer";
import productReducer, { IState as IProductState } from "../reducer/product.reducer";


export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export interface IReducer {
	product: IProductState
	cart: ICartState
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
