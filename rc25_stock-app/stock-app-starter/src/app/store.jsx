import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import storage from "redux-persist/lib/storage/"; // defaults to localStorage for web

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//? persist bir react kütüphanesi ve stateleri kalıcı belleğe atmya yarıyor. Bu bellekler local ve sessicionstoreage dir. yarn add redux-persist ile installl ediyoruz

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer,
  },
 

  //? serializable hatalarının giderilmesi için yapılır ve al kullan şeklindedir.

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;


//? Bu persister özelliği için persisterGate ile sarmallama yapıyoruz parentlarda bilgi. Ama store un bir altında olmalıdır.Yani provider ın

//! Bu şlemi yaptığımızda localStorage ile uğraşmıyoruz çünkü kendisi otomatik oraya persistroot key ile kaydediyor