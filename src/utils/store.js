import { configureStore } from "@reduxjs/toolkit";
import userRed from "./userSlice"
const store = configureStore({
    reducer:{
        user:userRed,
    }
})

export default store;