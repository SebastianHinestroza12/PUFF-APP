import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../slice/email/index";

export const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
