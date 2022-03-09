import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats:[],
        isLoad: false,

    },
    reducers: {
        getCatFetch: (state)=>{
            state.isLoad = true;            
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload;
            state.isLoad = false;
        },
        getCatsFailure: (state)=>{
            state.isLoad = false;
        }
    }
})
export const {getCatFetch,getCatsSuccess, getCatsFailure} = catSlice.actions;
export const catReducer = catSlice.reducer;