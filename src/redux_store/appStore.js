import {configureStore} from "@reduxjs/toolkit"
import hideShowMenuSlice from "./hideShowMenuSlice"
import toggleLightDarkModeSlice from "./toggleLightDarkModeSlice"

const appStore = configureStore({
    reducer:{
        menuButton:hideShowMenuSlice,
        toggleLightDarkMode:toggleLightDarkModeSlice
    }
})

export default appStore