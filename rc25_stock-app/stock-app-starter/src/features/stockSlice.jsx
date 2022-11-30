import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    purchases: null,
    firms: null,
    brands: null,
    products: null,
    sales: null,
    categories:null, 
    loading: false,
    error: false,

  },
  reducers: {
    //! Bu payload a veri yazma state leri otomatik olarak seçmek için yaptık bunu da url ile sağladık. Güncelleme için dispatch yayınlıyoruz ve biz bu yüzden payload seklini bozamayız ama içine bir değerler yazabiliriz.
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload:{data,url} }) => {
      state.loading = false;
      //! Burada url ile seçim yaptık ve hangi state ile get işlemi yapıyorsak onu gelen data ile güncelledik. Bir dataya nokta ve squarbraket ile erişim sağlayabiliyoruz ve squardbraket bize bir değişken yazma imkanı veriyor.
      state[url] = data

    },

    //! Burda promise all ile yaptığımız veri alma işlemi sonuçunda elde edilen datalarla ilgili statelerde güncelleme yapacaz
    getProCatBrandsSuccess: (state, { payload}) => {
      state.loading = false;
      //! Elde ettiğimiz dataları ilgi stateleri güncellerdik.
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
        

    },
 
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
);

export const {
  fetchStart,
  getSuccess,
  fetchFail,
  getProCatBrandsSuccess
} = stockSlice.actions;
export default  stockSlice.reducer;
