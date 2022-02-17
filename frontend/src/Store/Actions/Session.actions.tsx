import { CardData } from "../../Interfaces/CardData";
import Action from "../action.interface";
import { SessionState } from "../States/Session.state";

export const ACTION_TYPES = {
    SET_SESSION: 'SET_SESSION',
    SET_CARD_RATING: 'SET_CARD_RATING'
};

export class Actions {
    public static SetSession = (value: SessionState) : Action => ({
        type: ACTION_TYPES.SET_SESSION,
        payload: value
    })
    public static SetCardRating = (value: Partial<CardData>) : Action => ({
        type: ACTION_TYPES.SET_CARD_RATING,
        payload: value
    })
}
