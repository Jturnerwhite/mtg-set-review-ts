import { CardData } from '../../interfaces/CardData';
import Action from '../action.interface';
import { ACTION_TYPES } from '../actions/session.actions';

import LocalStorageService from '../../services/LocalStorageService';
import { Session } from '../../interfaces/SessionData';
import { initialState } from '../states/session.state';

export default function sessionReducers(
  state: Array<Session> | undefined,
  action: Action,
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
    case ACTION_TYPES.SET_CARD_RATING:
      newState = updateCardRating(newState, action.payload.sessionId, action.payload.cardData);
      break;
    case ACTION_TYPES.DELETE_SESSION:
      newState = deletesession(newState, action.payload);
      break;
    default:
      return newState;
  }
  if (newState.length > 0) {
    LocalStorageService.SetStorageArray(newState);
  }
  return newState;
}

const deletesession = (state: Array<Session>, sessionId: string): Array<Session> => {
  let sessionIndex = state.findIndex((session) => session.id === sessionId);
  if (sessionIndex >= 0) {
    return [...state.slice(0, sessionIndex), ...state.slice(sessionIndex + 1)];
  }
  return state;
};

const updateCardRating = (
  state: Array<Session>,
  sessionId: string,
  cardData: Partial<CardData>,
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
