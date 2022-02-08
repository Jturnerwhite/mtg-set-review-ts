import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./Reducers/Test.reducer";

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
