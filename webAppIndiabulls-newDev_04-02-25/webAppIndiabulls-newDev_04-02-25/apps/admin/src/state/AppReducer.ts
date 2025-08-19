import { createSlice } from "@reduxjs/toolkit";
import { AppStateModal } from "./AppReducerTypes";

const initialState:AppStateModal = {
    example: false
}

const appStateSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setExample(state){
            state.example = true;
        }
    }
});

const {actions, reducer} = appStateSlice;

export const {setExample} = actions;

export default reducer;