
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  arr: [], // כל הקונטקטים
  filteredContacts: [], // קונטקטים מסוננים
  currentContact: null // קונטקטים נבחרים
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUserForDetails: (state, action) => {
      state.currentUser = action.payload;
    },
    addArrUserToState: (state, action) => {
      state.arr = action.payload;
    },
    updateFilteredContacts: (state, action) => {
      state.filteredContacts = action.payload;
    },
    updateUserActiveStatus: (state, action) => {
      const { userId, newIsActive } = action.payload;
      const user = state.arr.find(user => user.id === userId);
      if (user) {
        user.isActive = newIsActive;
      }
    },
    updateCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
    updateCurrentContactField: (state, action) => {
      const { field, value } = action.payload;
      if (state.currentContact) {
        state.currentContact[field] = value;
      }
    },
    addUserToArr: (state, action) => {
      state.arr.push(action.payload);
    }
  },
});

export const {
  updateCurrentContact,
  updateCurrentContactField,
  selectUserForDetails,
  addArrUserToState,
  updateFilteredContacts,
  updateUserActiveStatus,
  addUserToArr
} = userSlice.actions;

export default userSlice.reducer;
