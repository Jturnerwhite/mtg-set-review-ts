import { Action as ReduxAction } from "redux";

interface Action extends ReduxAction {
  payload?: any;
}

export default Action;
