import { Action } from "redux";
import { ACTION_TYPES } from "../Actions/Test.actions";
import { CounterState, initialState } from "../States/Test.state";

export default function counterReducers(
  state: CounterState = initialState,
  action: Action
) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return { ...state, Value: state.Value + 1 };
    case ACTION_TYPES.SUBTRACT:
      return { ...state, Value: state.Value - 1 };
    default:
      return state;
  }
}
