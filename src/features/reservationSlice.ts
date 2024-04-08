import { createSlice } from "@reduxjs/toolkit";

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
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
