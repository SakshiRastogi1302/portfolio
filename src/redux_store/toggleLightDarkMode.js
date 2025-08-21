import { createSlice, current } from "@reduxjs/toolkit";

const toggleLightDarkMode = createSlice({
    name:"toggleLightDarkMode",
    initialState:{
        currentMode:"light"
    },
    reducers:{
        toggleMode:(state) => {
            state.currentMode = state.currentMode === "light"? "dark" : "light";
        }
    }
})

export const {toggleMode} = toggleLightDarkMode.actions;
export default toggleLightDarkMode.reducer;