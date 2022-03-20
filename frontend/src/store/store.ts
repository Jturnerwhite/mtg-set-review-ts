import { configureStore } from '@reduxjs/toolkit';
import { Session } from '../interfaces/SessionData';
import sessionReducers from './reducers/session.reducer';

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
