import { configureStore } from "@reduxjs/toolkit";
import { Session } from "../Interfaces/SessionData";
import sessionReducers from "./Reducers/Session.reducer";

export interface StateStructure {
  sessions: Array<Session>;
}

const store = configureStore({
  reducer: {
    sessions: sessionReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
