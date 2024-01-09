import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isLoading: false,
  list: [],
  viewData: null,
  error: null,
  success: false,
};

// create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userList(state) {
      state.isLoading = true;
    },
    userListSuccess(state, action) {
      state.isLoading = false;
      state.list = action.payload;
      state.success = true;
    },
    userListFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  name: userSliceName,
} = userSlice;
