import { configureStore } from "@reduxjs/toolkit";
//! store umuzu bununla oluşturacağız.

//? Slice ı import ettik.
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"



//? configureStore store oluşturuyor ve içinekileri birleştiriyor.
export const store = configureStore({
  reducer: {
    //! authReducer ı import ederek reducer ı getirmiş olduk ve buraya yazdık.
    auth:authReducer,
    news:newsReducer,
  }
})
