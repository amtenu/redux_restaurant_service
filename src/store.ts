import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./features/reservationSlice";
import customerReducer from './features/customeSlice'

export const store = configureStore({
  reducer: {
    reservationSlice,
    customer:customerReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
