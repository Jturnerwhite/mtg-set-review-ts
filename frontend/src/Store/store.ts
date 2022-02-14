import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./Reducers/Test.reducer";
import sessionReducers from "./Reducers/Session.reducer";

const store = configureStore({
  reducer: {
    counter: counterReducers,
    session: sessionReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
