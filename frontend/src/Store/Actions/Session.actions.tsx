import { CardData } from "../../Interfaces/CardData";
import Action from "../action.interface";
import { SessionState } from "../States/Session.state";

export const ACTION_TYPES = {
  SET_SESSION: 'SET_SESSION',
  UNSELECT_SESSION: 'UNSELECT_SESSION',
  SET_CARD_RATING: 'SET_CARD_RATING',
  SET_LAST_UPDATE: 'SET_LAST_UPDATE',
  SELECT_SESSION: 'SELECT_SESSION',
};

export class Actions {
  public static SetSession = (value: SessionState) : Action => ({
    type: ACTION_TYPES.SET_SESSION,
    payload: value
  })
  public static UnselectSession = () : Action => ({
    type: ACTION_TYPES.UNSELECT_SESSION,
  })
  public static SetCardRating = (value: Partial<CardData>) : Action => ({
    type: ACTION_TYPES.SET_CARD_RATING,
    payload: value
  })
  public static SetLastUpdate = (value: SessionState) : Action => ({
    type: ACTION_TYPES.SET_LAST_UPDATE,
    payload: value
  })
  public static SelectSession = (sessionID: string) : Action => ({
    type: ACTION_TYPES.SELECT_SESSION,
    payload: sessionID
  })  
}
