import {configureStore} from "@reduxjs/toolkit"
import hideShowMenuSlice from "./hideShowMenuSlice"
import toggleLightDarkMode from "./toggleLightDarkMode"

const appStore = configureStore({
    reducer:{
        menuButton:hideShowMenuSlice,
        toggleLightDarkMode:toggleLightDarkMode
    }
})

export default appStore