import { createSlice } from "@reduxjs/toolkit";

import {
    addtodo,
} from "./thunk";

export const initialState = {
    todo: [],
    error: {},
};

const menuSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
});

export default menuSlice.reducer;