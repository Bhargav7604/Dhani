import { createSlice } from "@reduxjs/toolkit";
import { DashboardStateModal } from "./DashboardStateSliceTypes";

export const initialState: DashboardStateModal = {
    example: false
}

const dashboardStateSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setExample(state){
            state.example = true;
        }
    }
});

const {actions, reducer} = dashboardStateSlice;

export const {setExample} = actions;

export default reducer;