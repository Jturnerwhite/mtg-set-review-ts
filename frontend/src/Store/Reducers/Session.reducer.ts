import { CardData } from "../../Interfaces/CardData";
import Action from "../action.interface";
import { ACTION_TYPES } from "../Actions/Session.actions";
import { SessionState, initialState } from "../States/Session.state";

export default function sessionReducers(
  state: SessionState | undefined,
  action: Action
): SessionState {
  let newState: SessionState = state ?? getFromStorage() ?? initialState;

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
    case ACTION_TYPES.SET_CARD_RATING:
      newState = updateCardRating(newState, action.payload);
      break;
    case ACTION_TYPES.SELECT_SESSION:
      return getSelectSession(action.payload) ?? newState;
    case "@@INIT":
      newState = getFromStorage() ?? initialState;
      break;
    default:
      return newState;
  }
  if (newState.id) {
    setStorageArray(newState);
  }
  return newState;
}

const getStorageArray = (): Array<SessionState> | undefined => {
  const getLocalState = localStorage.getItem("Session");
  if (!getLocalState) {
    return undefined;
  }
  return JSON.parse(getLocalState);
};

const getSelectSession = (sessionId: string): SessionState | undefined => {
  const storageArray = getStorageArray();
  return storageArray?.find((session) => session.id === sessionId);
};

const setStorageArray = (input: SessionState) => {
  const storageArray = getStorageArray();
  if (storageArray) {
    const x = storageArray.findIndex(
      (session: SessionState) => session.id === input.id
    );
    if (x < 0) {
      localStorage.setItem("Session", JSON.stringify([...storageArray, input]));
    } else {
      storageArray[x] = input;
      localStorage.setItem("Session", JSON.stringify(storageArray));
    }
  } else {
    localStorage.setItem("Session", JSON.stringify([input]));
  }
};

const getFromStorage = (): SessionState | undefined => {
  const getLocalState = localStorage.getItem("Session");
  if (!getLocalState) {
    return undefined;
  }
  const localState = JSON.parse(getLocalState);
  return {
    ...localState,
  } as SessionState;
};

const updateCardRating = (
  state: SessionState,
  cardData: Partial<CardData>
): SessionState => {
  let newState: SessionState = { ...state };
  let cardIndex = newState.cards.findIndex((card) => card.id === cardData.id);
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
