import {createSlice} from "@reduxjs/toolkit";
import {currentIpAdress} from "./locationAction.ts";

export interface ICurIpInitialState {
    isLoading: boolean,
    curPosition: string | null,
    error: string | undefined ,
}

export const initialState: ICurIpInitialState = {
    isLoading: false,
    curPosition: null,
    error: undefined,
}

const currentIPSlice = createSlice({
    name: '@@cur_location',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(currentIpAdress.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(currentIpAdress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.curPosition = action.payload;
            })
            .addCase(currentIpAdress.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
})

export const curLocationReducer =  currentIPSlice.reducer;
