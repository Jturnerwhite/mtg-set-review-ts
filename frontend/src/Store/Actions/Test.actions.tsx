import Action from "../action.interface";

export const ACTION_TYPES = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    MODIFYVALUE: 'MODIFYVALUE'
};

export class Actions {
    public static Add = (): Action => ({
        type: ACTION_TYPES.ADD,
    });
    public static Subtract = (): Action => ({
        type: ACTION_TYPES.SUBTRACT,
    });
    public static ModifyValue = (value: number) => ({
        type: ACTION_TYPES.MODIFYVALUE,
        payload: value
    })
}
