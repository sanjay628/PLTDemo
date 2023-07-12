import {createSlice} from '@reduxjs/toolkit';

const onBoardingSlice = createSlice({
  name: 'onBoarding',
  initialState: {
    shoppingList: [],
  },
  reducers: {
    storeShoppingListData: (state, action) => {
      state.shoppingList = action.payload;
    },
    resetState: state => {
      state.shoppingList = [];
    },
  },
});

export const {resetState, storeShoppingListData} = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
