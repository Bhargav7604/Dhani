import { createSlice } from "@reduxjs/toolkit";
import { AlgoCompDimensionPayload, AlgoCompDimensionStateProps } from "../LayoutUtils";

const initialState: AlgoCompDimensionStateProps = {
    algoCompHeight: 0
}

const AlgoCompDimensionSlice = createSlice({
    name: "algoCompDimension",
    initialState: initialState,
    reducers: {
        setAlgoCompHeight: (state, action: AlgoCompDimensionPayload) => {
            state.algoCompHeight = action.payload.algoCompHeight;
        },
    }
});

export const { setAlgoCompHeight } = AlgoCompDimensionSlice.actions;
export default AlgoCompDimensionSlice.reducer;