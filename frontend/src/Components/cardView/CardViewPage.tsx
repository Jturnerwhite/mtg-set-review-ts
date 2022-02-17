import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Actions } from "../../Store/Actions/Session.actions";
import { useState } from 'react';
import { SessionState } from "../../Store/States/Session.state";
import { CardData } from "../../Interfaces/CardData";
import { StateStructure } from "../../Store/store";

const CardViewPage = (props: any) => {
    const sessionState = props.state.session;
    // const dispatch = props.dispatch;
    const firstThreeArray = sessionState.cards?.slice(0, 3) ?? [];
    let [cardRating, setCardRating] = useState(0);
    let [activeCard, setActiveCard] = useState(firstThreeArray[0]);
    // let [nextCard, setNextCard] = useState();
    // let [perviousCard, setPerviousCard] = useState()
    
    
    //get first card and check if it has been rated
    //if not rated, display card and get rating
    //if rated move to next card

    const setRating = () => {
        dispatch(Actions.SetCardRating({
            id: activeCard.id,
            image: activeCard.image,
            cardName: activeCard.cardName,
            rating: cardRating
        } as CardData))
        firstThreeArray.forEach((card:CardData, index: number) => {
            if(card.id == activeCard.id){
                if(firstThreeArray.length -1 == index){
                    //finish page here
                }else{
                    setActiveCard(firstThreeArray[index +1])
                }
            }
        })
    }

    return(
        <>
            <h1>number of cards: {props.state.session.cards?.length}</h1>
            <select onChange = {(event) => setCardRating(parseInt(event.target.value)) }>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
            </select>
            <button onClick={setRating} type='submit'>Submit</button>
            <div>
                <p>{activeCard.cardName}</p>
                <img src={activeCard.image}/>
            </div>
        </>
    ) 
}

const defaultMapStateToProps = (state: StateStructure)=> {
    return { state: state};
};
const defaultMapDispatchToProps = (dispatch: Dispatch<any>) => {
    return { dispatch: dispatch };
};
  
export default connect(defaultMapStateToProps, defaultMapDispatchToProps) (CardViewPage);
