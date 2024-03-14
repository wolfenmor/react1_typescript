import {configureStore} from "@reduxjs/toolkit";
import {loadingReducer} from "./slices/loadingSlice";
import {authReducer} from "./slices/authSlice";
import {carReducer} from "./slices/CarSlice";

const store = configureStore({
    reducer:{
        loading: loadingReducer,
        auth: authReducer,
        cars: carReducer
    }
})

export {store}