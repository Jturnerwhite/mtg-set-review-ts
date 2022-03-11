import { CardData } from "./CardData";

export interface SetData {
  id: string;
  name: string;
  code: string;
  icon: string;
  cards: Array<CardData>;
}
