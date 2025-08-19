// import {createSlice} from "@reduxjs/toolkit";


// const AuthSlice = createSlice({
//     name:"auth",
//     initialState: { isAuthenticated: false, user: null },

//     reducers:{
//         login(state, action) {
//             state.isAuthenticated = true;
//             state.user = action.payload;
//           },

//         //   logout(state, action){
//         //     state.isAuthenticated = false;

//         //   }
//            }
// });


// export const {login, } = AuthSlice.actions;
// export default AuthSlice.reducer;


import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,
}


const AuthSlice = createSlice({
    name:"authData",
    initialState,
    reducers:{
         setToken:(state, action:PayloadAction<string>) =>{
          state.token = action.payload;
          localStorage.setItem("token", action.payload);
         },
        clearToken:(state) => {
        state.token = null;
        localStorage.removeItem("token")
}
      }
});


export const {setToken,clearToken } = AuthSlice.actions;
export default AuthSlice.reducer;