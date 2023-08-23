import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    menuOpen:false,
    themeToggler:true
}

const menuSlice = createSlice({
    name:"menu",
    initialState:INITIAL_STATE,
    reducers:{
        openMenu:(state)=>{
            state.menuOpen = !state.menuOpen
        },
        toggleTheme:(state)=>{
            state.themeToggler = !state.themeToggler
        }
    }
})

export const {openMenu} = menuSlice.actions;
export const {toggleTheme} =menuSlice.actions;
export default menuSlice.reducer;