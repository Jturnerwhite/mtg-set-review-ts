import { configureStore } from "@reduxjs/toolkit";
import sessionReducers from "./Reducers/Session.reducer";
import { SessionState } from "./States/Session.state";

export interface StateStructure {
  session: SessionState;
}

const store = configureStore({
  reducer: {
    session: sessionReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
