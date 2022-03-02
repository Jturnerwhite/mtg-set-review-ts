import { Actions } from "../../Store/Actions/Session.actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardData } from "../../Interfaces/CardData";
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from "../../Interfaces/DefaultConnections";

const ReviewViewPage = (props: DefaultProperties) => {
  const sessionState = props.state.session;
  const dispatch = props.dispatch;
  let navigate = useNavigate();
  let [cardRating, setCardRating] = useState(0);
  let [activeCard, setActiveCard] = useState(sessionState.cards[0]);

  useEffect(
    () => {
      let newActiveCard = getNextCard();
      if (!newActiveCard) {
        navigate(`/about/${sessionState.id}`);
      } else {
        setActiveCard(newActiveCard);
        setCardRating(0);
      }
    }, [sessionState]
  );
  const getNextCard = () => {
    let newActiveCard = sessionState.cards.find((card: CardData) => {
      return (card.rating === undefined)
      });
    return newActiveCard;
  }
 
  const setRating = () => {
    dispatch(
      Actions.SetCardRating({
        id: activeCard.id,
        image: activeCard.image,
        cardName: activeCard.cardName,
        rating: cardRating,
      } as CardData)
    );
  };
  let options = <></>; 
  for (let i = 0; i <= 10; i++){
      options = <>{options}<option value={i}>{i}</option></>;
  }
  return (
    <>
      <h1>Session: {sessionState.name}</h1>
      <img style={{width: '100px', height: '100px'}}src={sessionState.icon}/>
      <h1>number of cards: {sessionState.cards.length}</h1>
      <select value={cardRating} id='ratingSelect' onChange={(event) => setCardRating(parseInt(event.target.value))}>
        {options}
      </select>
      <button onClick={setRating} type="submit">Submit</button>
        <p>{activeCard.cardName}</p>
      <div>
        <img alt={activeCard.cardName} src={activeCard.image} />
      </div>
    </>
  );
};

export default connect(
  defaultMapStateToProps,
  defaultMapDispatchToProps
)(ReviewViewPage);
