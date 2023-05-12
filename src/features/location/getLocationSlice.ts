import {createSlice} from "@reduxjs/toolkit";
import {getLocationByIp} from "./locationAction.ts";

interface  IData {
    query: string
    countryCode: string
    regionName: string
    city: string
    zip: string
    lat: number
    lon: number
    timezone: string
    isp: string
}
export interface IState {
    data: IData | null;
    isLoading: boolean;
    error: string | null | undefined,
}

const initialState: IState = {
    data: null,
    isLoading: false,
    error: null,
};

 const getLocationSlice = createSlice({
    name: '@@location',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getLocationByIp.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getLocationByIp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(getLocationByIp.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export const locationReducer = getLocationSlice.reducer;


