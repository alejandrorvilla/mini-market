import { createSlice } from "@reduxjs/toolkit";
import { IMessage, ITransaction } from "../../model/transaction";

export interface IState {
  loading: boolean;
  transaction?: ITransaction;
  message?: IMessage;
}

const initialState: IState = {
  loading: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    loadTransaction: (state: IState) => {
      state.loading = true;
    },
    processTransaction: (state: IState, { payload }) => {
      const { data } = payload;
      state.loading = false;
      if (data.status === "DECLINED") {
        state.message = {
          type: "error",
          message: "The payment was declined.",
        };
      } else if (data.status === "APPROVED") {
        state.message = {
          type: "success",
          message: `The payment was approved successfully. Order code: ${data.reference}.`,
        };
      } else if (data.status === "ERROR") {
        state.message = {
          type: "error",
          message: "Transaction with error. Contact us please.",
        };
      }
    },
    errorTransaction: (state: IState) => {
      state.loading = false;
      state.message = {
        type: "error",
        message: "An error occurred with the platform.",
      };
    },
    clearMessage: (state: IState) => {
      state.message = undefined;
    },
  },
});

export const {
  loadTransaction,
  processTransaction,
  errorTransaction,
  clearMessage,
} = transactionSlice.actions;

export default transactionSlice.reducer;
