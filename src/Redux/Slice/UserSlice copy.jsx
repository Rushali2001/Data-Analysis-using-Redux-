import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.list.push(action.payload);
    },
    removeUser(state, action) {
      state.list.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
     state.list = []
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  name: userSliceName,
} = UserSlice;
