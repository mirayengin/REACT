import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//! Middleware redux da API response larının reducer a sunulmasını sağlar

const initialState = {
  newsList: [],

  //? Veri çekme işlemi olduğu için loading ve error statelerini koyduk.
  loading: false,
  error: false,
};

//? Redux da api lerden veri çekmede middleware kullanmak lazım bu yüzden Thunk kullanmak lazım
export const getNews = createAsyncThunk(
  "getNews", //! action type
  async (thunkAPI,{rejectWithValue}) => {
    //? api veri çekme fonk(state i doldurmak için)
    const URL_KEY =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16ebd5059c464cc2931e5f8b0c80357a";

    try {
      const { data } = await axios(URL_KEY);
      //! süslü açtık o yüzden fonk bize dataları return ediyor.
      console.log(data.articles);
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewList: (state) => {
      state.newsList = [];
      // state.newsList = initialState,
    },
  },

  //! bu recuder bize veri geçerken loading veya error gibi state leri kontrol etmemizi sağlar.
  extraReducers: (builder) => {
    builder
      //! Bu pending getNews fonk veri çekme ileminin başladığını temsil ediyor bu tanımlıdır biz alıp kullanıyoruz. Bunu yan statelerr için kullanıyoruz.
      .addCase(getNews.pending, (state) => {
      state.loading = true;
      })

      //? getNews fonk veri çekme işleminin başarılı bir şekilde bittiğini temsil ediyor
      .addCase(getNews.fulfilled, (state, { payload }) => {
        console.log('newpayload :>> ', payload);
        

        state.loading = false;
        state.newsList = payload;
      
    })
      //! getNews fonk veri çekme işleminin başarısız olduğunu temsil ediyor
    .addCase(getNews.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;

      
      })
  },
});

export const { clearNewList } = newsSlice.actions;

export default newsSlice.reducer;
