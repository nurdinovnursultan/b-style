import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


export const register = createAsyncThunk('user/register', async (userInfo, { dispatch }) => {
    try {
        axios.post('https://b-style-app.herokuapp.com/api/auth/users/', {...userInfo});
    } catch (error) {
        console.error(error)
    }
})

const auth = createSlice({
    name: 'auth',
    intialState: {},
    reducers: {

    }
})


export const authSlice = auth.reducer;

