//! İlk olarak import ediyoruz
import { createSlice } from "@reduxjs/toolkit";

//! İlk olarak bir initialState oluşturuyoruz. Bize burda user bilgisi gerektiği için isminide user verdik.
const initialState = {
  user: null,
};


//! createSlice kullandığımız zaman type,reducer ve actionları ayrı ayrı oluşturmaya gerek yok
const authSlice = createSlice({
  //? Bu slice ın ismidir.
  name: "auth",
  //? State in ilk değerleri
  // initialState: initialState,
  initialState,

  //? Burayada reducerları yazıyoruz. İçinede stateleri değiştiren fonk yazıyoruz.Bu fonk yazarkende key value şeklinde yazıyoruz.
  reducers: {
    // setUser: (state, action) => {
    setUser: (state, {payload}) => {
      // state.user = action.payload,

      //! Yukarıda initialState değerini verdiğimiz user state ine burda login yapılırken girdiğimiz user bilgilerini atıyoruz.
      state.user = payload;
    },

    // clearUser: (state, action) => {
    clearUser: (state, {type,payload}) => {
      // state.user = initialState
      state.user = null
    },
  }, 
});


//! Yazdığımız reducerları başka componentlerde kullanmak için export ediyoruz.Bunlar type ve actionları otomatik oluşturuyor.
export const { setUser, clearUser } = authSlice.actions;


//? Authslice içindeki otomatik oluşan reducer ı gönderiyoruz.
export default authSlice.reducer;