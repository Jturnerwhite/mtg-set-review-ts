import { CardData } from "../../Interfaces/CardData";
import { Session } from "../../Interfaces/SessionData";
import Action from "../action.interface";

export const ACTION_TYPES = {
  SET_SESSION: "SET_SESSION",
  SET_CARD_RATING: "SET_CARD_RATING",
  SELECT_SESSION: "SELECT_SESSION",
  DELETE_SESSION: "DELETE_SESSION",
};

export class Actions {
  public static SetSession = (session: Session): Action => ({
    type: ACTION_TYPES.SET_SESSION,
    payload: session,
  });
  public static SetCardRating = (
    sessionId: string,
    cardData: Partial<CardData>
  ): Action => ({
    type: ACTION_TYPES.SET_CARD_RATING,
    payload: { sessionId: sessionId, cardData: cardData },
  });
  public static SelectSession = (sessionId: string): Action => ({
    type: ACTION_TYPES.SELECT_SESSION,
    payload: sessionId,
  });
  public static DeleteSession = (sessionId: string): Action => ({
    type: ACTION_TYPES.DELETE_SESSION,
    payload: sessionId,
  });
}
