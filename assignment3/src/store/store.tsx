import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import Pokemonservice from "@service/pokemonservice/Pokemonservice";
import counterSlice from "./slice/counterSlice";
import regisSlice from "./slice/regisSlice";

/* const store = configureStore({
    reducer: {
        counter: counterSlice,
        register: regisSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; */

export const store = configureStore({
  reducer: {
    [Pokemonservice.reducerPath]: Pokemonservice.reducer,
    // [Pokemonservice.reducerPath]: Pokemonservice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Pokemonservice.middleware/* ,Pokemonservice.middleware */),
});

setupListeners(store.dispatch);
