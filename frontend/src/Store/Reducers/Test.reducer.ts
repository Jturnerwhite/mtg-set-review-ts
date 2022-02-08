import Action from "../action.interface";
import { ACTION_TYPES } from "../Actions/Test.actions";
import { CounterState, initialState } from "../States/Test.state";

export default function counterReducers(
  state: CounterState = initialState,
  action: Action
) {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return { ...state, value: state.value + 1 };
    case ACTION_TYPES.SUBTRACT:
      return { ...state, value: state.value - 1 };
    case ACTION_TYPES.MODIFYVALUE:
      return { ...state, userAge: (state.userAge = action.payload) };
    default:
      return state;
  }
}
