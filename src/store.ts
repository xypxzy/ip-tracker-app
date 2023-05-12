import {configureStore} from "@reduxjs/toolkit";
import {locationReducer} from "./features/location/getLocationSlice.ts";

export const store = configureStore({
    reducer: {
        location: locationReducer,
    },
    devTools: true
})