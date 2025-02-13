


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     currentUser: null,
//     arr: [],
// };

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         selectUserForDetails: (state, action) => {
//             state.currentUser = action.payload;
//         },
//         addArrUserToState: (state, action) => {
//             state.arr = action.payload;
//         },
//         // אקשן חדש לעדכון isActive
//         updateUserActiveStatus: (state, action) => {
//             const { userId, newIsActive } = action.payload;
//             const user = state.arr.find(user => user.id === userId); // חיפוש המשתמש לפי מזהה
//             if (user) {
//                 user.isActive = newIsActive; // עדכון ערך isActive של המשתמש
//             }
//         },
//     },
// });

// export const { selectUserForDetails, addArrUserToState, updateUserActiveStatus } = userSlice.actions;
// export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  arr: [], // כל הקונטקטים
  filteredContacts: [],  // קונטקטים מסוננים
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
      state.filteredContacts = action.payload;  // עדכון הקונטקטים המסוננים
    },
    updateUserActiveStatus: (state, action) => {
      const { userId, newIsActive } = action.payload;
      const user = state.arr.find(user => user.id === userId);
      if (user) {
        user.isActive = newIsActive;
      }
    },
  },
});

export const { selectUserForDetails, addArrUserToState, updateFilteredContacts, updateUserActiveStatus } = userSlice.actions;
export default userSlice.reducer;
