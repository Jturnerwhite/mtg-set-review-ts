import { CardData } from "../../Interfaces/CardData";
import Action from "../action.interface";
import { ACTION_TYPES } from "../Actions/Session.actions";

import LocalStorageService from "../../Services/LocalStorageService";
import { Session } from "../../Interfaces/SessionData";
import { initialState } from "../States/Session.state";

export default function sessionReducers(
  state: Array<Session> | undefined,
  action: Action
): Array<Session> {
  let localStorageArray = LocalStorageService.GetSessions();
  let newState = state ?? initialState;
  if (localStorageArray && !state) {
    newState = localStorageArray;
  }
  switch (action.type) {
    case ACTION_TYPES.SET_SESSION:
      newState = [
        ...newState,
        {
          name: action.payload.name,
          id: action.payload.id,
          cardSet: action.payload.cardSet,
          cards: action.payload.cards,
          icon: action.payload.icon,
          created: action.payload.created,
        } as Session,
      ];
      break;
    case ACTION_TYPES.UNSELECT_SESSION:
      newState = initialState;
      break;
    case ACTION_TYPES.SET_CARD_RATING:
      newState = updateCardRating(
        newState,
        action.payload.cardData,
        action.payload.sessionId
      );
      break;
    case ACTION_TYPES.DELETE_SESSION:
      newState = deleteSession(newState, action.payload);
      break;
    default:
      return newState;
  }
  if (newState.length > 0) {
    LocalStorageService.SetStorageArray(newState);
  }

  return newState;
}

const deleteSession = (
  state: Array<Session>,
  sessionId: string
): Array<Session> => {
  let sessionIndex = state.findIndex((session) => session.id === sessionId);
  console.log(sessionIndex);
  if (sessionIndex >= 0) {
    return [...state.slice(0, sessionIndex), ...state.slice(sessionIndex + 1)];
  }
  return state;
};

const updateCardRating = (
  state: Array<Session>,
  cardData: Partial<CardData>,
  sessionId: string
): Array<Session> => {
  let sessionIndex = state.findIndex((session) => session.id === sessionId);

  if (sessionIndex >= 0) {
    let session = state[sessionIndex];
    let cardIndex = session.cards.findIndex((card) => card.id === cardData.id);
    return [
      ...state.slice(0, sessionIndex),
      {
        ...session,
        cards: [
          ...session.cards.slice(0, cardIndex),
          {
            ...session.cards[cardIndex],
            rating: cardData.rating,
          } as CardData,
          ...session.cards.slice(cardIndex + 1),
        ],
        lastUpdate: new Date().toDateString(),
      } as Session,
      ...state.slice(sessionIndex + 1),
    ];
  }
  return state;
};
