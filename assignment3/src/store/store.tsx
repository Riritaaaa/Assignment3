import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice"
import regisSlice from "./slice/regisSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        register: regisSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;