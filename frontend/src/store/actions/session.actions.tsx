import { CardData } from '../../interfaces/CardData';
import { Session } from '../../interfaces/SessionData';
import Action from '../action.interface';

export const ACTION_TYPES = {
  SET_SESSION: 'SET_SESSION',
  SET_CARD_RATING: 'SET_CARD_RATING',
  SELECT_SESSION: 'SELECT_SESSION',
  DELETE_SESSION: 'DELETE_SESSION',
};

export class Actions {
  public static Setsession = (session: Session): Action => ({
    type: ACTION_TYPES.SET_SESSION,
    payload: session,
  });
  public static SetCardRating = (sessionId: string, cardData: Partial<CardData>): Action => ({
    type: ACTION_TYPES.SET_CARD_RATING,
    payload: { sessionId: sessionId, cardData: cardData },
  });
  public static Selectsession = (sessionId: string): Action => ({
    type: ACTION_TYPES.SELECT_SESSION,
    payload: sessionId,
  });
  public static Deletesession = (sessionId: string): Action => ({
    type: ACTION_TYPES.DELETE_SESSION,
    payload: sessionId,
  });
}
