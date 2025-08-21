import { createSlice } from "@reduxjs/toolkit";

const hideShowMenuSlice = createSlice({
    name:"menuButton",
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        toggleMenuButton: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {toggleMenuButton} = hideShowMenuSlice.actions;
export default hideShowMenuSlice.reducer;