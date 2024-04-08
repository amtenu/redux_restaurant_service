import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ReservtionState {
  value: string[];
}

const initialState: ReservtionState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation ,removeReservation} = reservationsSlice.actions;

export default reservationsSlice.reducer;
