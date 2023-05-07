import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getLocationByIp = createAsyncThunk(
    'location/getLocationByIp',
    async (ipAddress: string) => {
        const res = await axios.get(`http://ip-api.com/json/${ipAddress}`)
        return res.data;
    }
)

export const currentIpAdress = createAsyncThunk(
    'location/currentIp',
    async () => {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data;
    }
)