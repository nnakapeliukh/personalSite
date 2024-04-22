import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type {RootState} from '../../storre';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    city: "",
  },
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
  },
});

export const { setFirstName } = userSlice.actions;

export const selectFirstName = (state: RootState) => state.user.firstName;

export default userSlice.reducer;
