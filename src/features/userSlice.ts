import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { UserType } from '../types/UserType';

type InitialStateType = {
  user: UserType
}

const initialState:InitialStateType = {
  user: {
    uid: "",
    email: "",
    displayName: "",
    photoUrl: "",
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = initialState.user
    },
    updateUserProfile: (state, action: PayloadAction<UserType>) => {
      state.user.displayName = action.payload.displayName;
    }
  },
});

export const { login, logout,updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;