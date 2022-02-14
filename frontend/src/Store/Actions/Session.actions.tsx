import Action from "../action.interface";
import { SessionState } from "../States/Session.state";

export const ACTION_TYPES = {
    SET_SESSION: 'SET_SESSION'
};

export class Actions {
    public static SetSession = (value: SessionState) : Action => ({
        type: ACTION_TYPES.SET_SESSION,
        payload: value
    })
}
