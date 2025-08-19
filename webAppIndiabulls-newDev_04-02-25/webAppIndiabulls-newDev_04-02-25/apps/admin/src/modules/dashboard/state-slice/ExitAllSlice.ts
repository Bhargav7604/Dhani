
import {createSlice} from "@reduxjs/toolkit";


interface ModelState {
    isOpen:boolean;
}

const initialState:ModelState = {
    isOpen:false,
};


const modelSlice = createSlice({
    name:"exitall",
    initialState,
    reducers:{
        openModel(state) {
            state.isOpen = true;
        },
        closeModel(state){
            state.isOpen = false;
        },
    },
});

export const {openModel, closeModel} = modelSlice.actions;
export default modelSlice.reducer;
