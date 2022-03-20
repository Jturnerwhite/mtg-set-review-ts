import { Dispatch } from 'redux';
import Action from '../store/action.interface';
import { StateStructure } from '../store/store';

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
