import { createSlice } from "@reduxjs/toolkit";

import { MovieType } from "utils/types/movie";

// untuk inisialisasi state
interface StateType{
    favorites: MovieType[];
    loading: boolean;
}

// untuk nilai default
const initialState: StateType = {
    favorites: [],
    loading: true
}

const sliceState = createSlice({ // createSlice untuk inisialisasi state
    name: "state",
    initialState: initialState,
    reducers: {
        setFavorites: (state, action) =>{
            state.favorites = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

const reducer = {
    state: sliceState.reducer,
};

export const { setFavorites, setLoading } = sliceState.actions;
export default reducer;

/* fungsi reducer: untuk melakukan perubahan sebuah data/state dari nilai awal
(initial state) menjadi nilai yang diinginkan/baru yang bisa didapat
dari sebuah veriabel yang bernama payload(muatan).
*/