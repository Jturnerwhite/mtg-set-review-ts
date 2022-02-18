import { Actions } from "../../Store/Actions/Session.actions";
import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardData } from "../../Interfaces/CardData";
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from "../../Interfaces/DefaultConnections";

const CardViewPage = (props: DefaultProperties) => {
  const sessionState = props.state.session;
  const dispatch = props.dispatch;
  let navigate = useNavigate();
  let [cardRating, setCardRating] = useState(0);
  let [activeCard, setActiveCard] = useState(sessionState.cards[0]);

  const setRating = () => {
    dispatch(
      Actions.SetCardRating({
        id: activeCard.id,
        image: activeCard.image,
        cardName: activeCard.cardName,
        rating: cardRating,
      } as CardData)
    );
    sessionState.cards.forEach((card: CardData, index: number) => {
      if (card.id === activeCard.id) {
        if (sessionState.cards.length - 1 === index) {
            navigate("/finish");
        } else {
          setActiveCard(sessionState.cards[index + 1]);
          setCardRating(0)
        }
      }
    });
  };
  let options = <></>; 
  for (let i = 0; i <= 10; i++){
      options = <>{options}<option value={i}>{i}</option></>;
  }
  return (
    <>
      <h1>number of cards: {props.state.session.cards?.length}</h1>
      <select value={cardRating} id='ratingSelect' onChange={(event) => setCardRating(parseInt(event.target.value))}>
        {options}
      </select>
      <button onClick={setRating} type="submit">Submit</button>
      <div>
        <p>{activeCard.cardName}</p>
        <img alt={activeCard.cardName} src={activeCard.image} />
      </div>
    </>
  );
};

export default connect(
  defaultMapStateToProps,
  defaultMapDispatchToProps
)(CardViewPage);
