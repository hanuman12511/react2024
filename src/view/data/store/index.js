import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/couterSlice"

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

export default store