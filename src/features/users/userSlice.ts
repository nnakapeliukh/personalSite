import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type {RootState} from '../../storre';

interface UserData {
  userName: string,
  firstName: string,
  lastName: string,
  city: string,
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    city: "",
  },
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.city = action.payload.city;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user;

export default userSlice.reducer;
