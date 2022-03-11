import { CardData } from "../../Interfaces/CardData";
import { Session } from "../../Interfaces/SessionData";
import Action from "../action.interface";

export const ACTION_TYPES = {
  SET_SESSIONS_ARRAY: 'SET_SESSIONS_ARRAY',
  SET_SESSION: 'SET_SESSION',
  UNSELECT_SESSION: 'UNSELECT_SESSION',
  SET_CARD_RATING: 'SET_CARD_RATING',
  SET_LAST_UPDATE: 'SET_LAST_UPDATE',
  SELECT_SESSION: 'SELECT_SESSION',
  DELETE_SESSION: 'DELETE_SESSION'
};

export class Actions {
  public static SetSessionsArray = (value: any) : Action => ({
    type: ACTION_TYPES.SET_SESSIONS_ARRAY,
    payload: value
  })
  public static SetSession = (value: Session) : Action => ({
    type: ACTION_TYPES.SET_SESSION,
    payload: value
  })
  public static UnselectSession = () : Action => ({
    type: ACTION_TYPES.UNSELECT_SESSION,
  })
  public static SetCardRating = (value: Partial<CardData>, sessionId: string) : Action => ({
    type: ACTION_TYPES.SET_CARD_RATING,
    payload: {cardData: value, sessionId: sessionId}
  })
  public static SetLastUpdate = (value: Session) : Action => ({
    type: ACTION_TYPES.SET_LAST_UPDATE,
    payload: value
  })
  public static SelectSession = (sessionID: string) : Action => ({
    type: ACTION_TYPES.SELECT_SESSION,
    payload: sessionID
  })  
  public static DeleteSession = (value: string) : Action => ({
    type: ACTION_TYPES.DELETE_SESSION,
    payload: value
  })
}
