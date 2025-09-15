import { createSlice} from "@reduxjs/toolkit";

const toggleLightDarkModeSlice = createSlice({
    name:"toggleLightDarkMode",
    initialState:{
        currentMode:"dark"
    },
    reducers:{
        toggleMode:(state) => {
            state.currentMode = state.currentMode === "dark"? "light" : "dark";
        }
    }
})

export const {toggleMode} = toggleLightDarkModeSlice.actions;
export default toggleLightDarkModeSlice.reducer;