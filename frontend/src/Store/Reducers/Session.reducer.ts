import { CardData } from "../../Interfaces/CardData";
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
    case ACTION_TYPES.SET_CARD_RATING:
      return updateCardRating(state, action.payload);
    default:
      return state;
  }
}
const updateCardRating = (
  state: SessionState,
  cardData: Partial<CardData>
): SessionState => {
  let newState: SessionState = {
    ...state,
  };
  newState.cards?.forEach((card) => {
    if (card.id == cardData.id) {
      card.rating = cardData.rating ?? 0;
    }
  });
  return newState;
};
