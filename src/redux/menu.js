import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    menuOpen:false,
    themeToogler:false
}

const menuSlice = createSlice({
    name:"menu",
    initialState:INITIAL_STATE,
    reducers:{
        openMenu:(state)=>{
            state.menuOpen = !state.menuOpen
        },
        toogleTheme:(state)=>{
            state.themeToogler = !state.themeToogler
        }
    }
})


export const {openMenu} = menuSlice.actions;
export const {toogleTheme} =menuSlice.actions;
export default menuSlice.reducer;