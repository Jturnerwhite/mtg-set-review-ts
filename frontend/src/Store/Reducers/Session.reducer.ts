import Action from "../action.interface";
import { ACTION_TYPES } from "../Actions/Session.actions";
import { SessionState, initialState } from "../States/Session.state";

export default function sessionReducers(
  state: SessionState = initialState,
  action: Action
): SessionState {
  switch (action.type) {
    case ACTION_TYPES.SET_SESSION:
      return {
        name: action.payload.name,
        id: action.payload.id,
        cardSet: action.payload.cardSet,
        cards: action.payload.cards,
      };
    default:
      return state;
  }
}
