import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState,InitialState } from "@/types/Features";

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logOut:()=>{
            return initialState;
        },
        logIn: (state,action: PayloadAction<string>)=>{
            return{
                value:{
                    isAuth:true,
                    username: action.payload,
                    uid:"123fwbfhjw",
                    isModerator:false,
                }
            }
        }
    }
})

export const {logIn,logOut} = auth.actions;
export default auth.reducer;