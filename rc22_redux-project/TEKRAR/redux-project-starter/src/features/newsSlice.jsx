import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsList: [],

  //? Veri çekme işlemi olduğu için loading ve error statelerini koyduk.
  loading: false,
  error: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList: (state, {type,payload}) => {
      // state.newsList = initialState,
      state.newsList = [],
    },
  },
});

export const {clearNewList} = newsSlice.actions;

export default newsSlice.reducer;
