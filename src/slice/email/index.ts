import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../Store/store";

export interface CounterState {
  email: any;
}

const initialState: CounterState = {
  email: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    sendEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { sendEmail } = counterSlice.actions;

export function Email(email: string) {
  return function (dispatch: any) {
    dispatch({
      payload: email,
    });
  };
}

export default counterSlice.reducer;
