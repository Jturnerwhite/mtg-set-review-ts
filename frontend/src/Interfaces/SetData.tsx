import {CardData} from './CardData';


export interface SetData {
    id: string,
    name: string,
    code: string,
    cards: Array<CardData>
}