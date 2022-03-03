import { CardData } from "../../Interfaces/CardData";
import Action from "../action.interface";
import { ACTION_TYPES } from "../Actions/Session.actions";
import { SessionState, initialState } from "../States/Session.state";
import LocalStorageService from "../../Services/LocalStorageService";

export default function sessionReducers(
  state: SessionState | undefined,
  action: Action
): SessionState {
  let newState: SessionState = state ?? initialState;
  switch (action.type) {
    case ACTION_TYPES.SET_SESSION:
      newState = {
        name: action.payload.name,
        id: action.payload.id,
        cardSet: action.payload.cardSet,
        cards: action.payload.cards,
        icon: action.payload.icon,
        created: action.payload.created,
      };
      break;
    case ACTION_TYPES.UNSELECT_SESSION:
      newState = initialState;
      break;
    case ACTION_TYPES.SET_CARD_RATING:
      newState = updateCardRating(newState, action.payload);
      break;
    case ACTION_TYPES.SELECT_SESSION:
      return LocalStorageService.GetSelectSession(action.payload) ?? newState;
    default:
      return newState;
  }
  if (newState.id) {
    LocalStorageService.SetStorageArray(newState);
  }
  return newState;
}

const updateCardRating = (
  state: SessionState,
  cardData: Partial<CardData>
): SessionState => {
  let newState: SessionState = { ...state };
  let cardIndex = newState.cards.findIndex((card) => card.id === cardData.id);
  newState.lastUpdate = new Date().toDateString();
  newState.cards = [
    ...state.cards.slice(0, cardIndex),
    {
      ...state.cards[cardIndex],
      rating: cardData.rating,
    } as CardData,
    ...state.cards.slice(cardIndex + 1),
  ];
  return newState;
};
