import { CardData } from "./CardData";

export interface Session {
  id: string;
  name: string;
  cardSet: any;
  cards: Array<CardData>;
  icon: string;
  created: string;
  lastUpdate?: string;
}
