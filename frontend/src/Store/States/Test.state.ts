import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  Value: number;
  test: string;
}

export const initialState: CounterState = {
  Value: 0,
  test: "this should not be changed",
};
