import { Dispatch } from "redux";
import Action from "../Store/action.interface";
import { StateStructure } from "../Store/store";

export interface Props {
  state: StateStructure;
  dispatch: Dispatch<Action>;
}

export const defaultMapStateToProps = (state: StateStructure) => {
  return { state: state };
};
export const defaultMapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return { dispatch: dispatch };
};
