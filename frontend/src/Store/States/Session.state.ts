import { Session } from "../../Interfaces/SessionData";

export interface SessionState extends Session {}

export const initialState: SessionState = {
  id: "",
  name: "",
  cardSet: {},
  cards: [],
  icon: "",
  created: "",
  lastUpdate: "",
};
