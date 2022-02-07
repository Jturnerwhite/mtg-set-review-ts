import { Action } from "redux";

export const ACTION_TYPES = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT'
};

export class Actions {
    public static Add = (): Action => ({
        type: ACTION_TYPES.ADD,
    });
    public static Subtract = (): Action => ({
        type: ACTION_TYPES.SUBTRACT
    });
}