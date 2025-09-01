import { createSlice} from "@reduxjs/toolkit";

const toggleLightDarkModeSlice = createSlice({
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

export const {toggleMode} = toggleLightDarkModeSlice.actions;
export default toggleLightDarkModeSlice.reducer;