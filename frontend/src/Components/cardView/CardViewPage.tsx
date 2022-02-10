import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CounterState } from "../../Store/States/Test.state";
import { useEffect, useState } from 'react';
import { CardData } from './CardDataInterface'

const CardViewPage = () => {
    let [cards, setCards] = useState(([] as Array<CardData>));
    let [selectedCard, setCard] = useState(undefined as CardData | undefined);
    
    useEffect(() => {
        if(cards.length == 0) {
            fetch("https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1")
                .then(res => res.json())
                .then(json => {
                let mappedCards: Array<CardData> = json.data.map((singleCard: any) => {
                    return ({
                        id: singleCard.id,
                        name: singleCard.name,
                        image: singleCard.image_uris?.normal ?? ''
                    } as CardData);
                    
                });
                setCards(mappedCards);
                setCard(mappedCards[0])
            })
        }
    },[]);
    return(
        <>
        <h1>{cards.length}</h1>
        { selectedCard &&
            <div>
                <p>{selectedCard.name}</p>
                <img src={selectedCard.image}/>
            </div>
        }
        </>
    ) 
}

const defaultMapStateToProps = (state: CounterState): any => {
    return { state: state };
};
const defaultMapDispatchToProps = (dispatch: Dispatch<any>): any => {
    return { dispatch: dispatch };
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps) (CardViewPage);
