import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  test: string;
  userAge: number;
}

export const initialState: CounterState = {
  value: 0,
  test: "this should not be changed",
  userAge: 0,
};
