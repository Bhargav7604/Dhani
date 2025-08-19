import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  fullName: string;
  role: string;
  email: string;
  mobileNumber: string;
}

const initialState: UserState = {
  fullName: "Rajesh Sriwastava",
  role: "Admin",
  email: "Rajesh@gmail.com",
  mobileNumber: "123-789-7890",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
