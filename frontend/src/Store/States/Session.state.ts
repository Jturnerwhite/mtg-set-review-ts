import { CardData } from "../../Components/cardView/CardDataInterface";

export interface SessionState {
  id: string;
  name: string;
  cardSet: any;
  cards?: Array<CardData>;
}
export const initialState: SessionState = {
  id: "",
  name: "",
  cardSet: {},
  cards: [],
};
