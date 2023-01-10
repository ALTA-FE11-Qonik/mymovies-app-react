import { configureStore } from "@reduxjs/toolkit";
import reducer from "utils/redux/reducer/reducer";

const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});

export default store;


/* store: function/method yang menerima sebuah parameter (reducer),
berfungsi untuk mendaftarkan sebuah state.
Store ini digunakan untuk membuat sebuah wadah/tempat yang nnantinya dipakai untuk 
menyimpan informasi data/state yg ditempatkan pada hirarki paing atas dari component tree.
untuk implementasi, pakai yg di class saja.
 */