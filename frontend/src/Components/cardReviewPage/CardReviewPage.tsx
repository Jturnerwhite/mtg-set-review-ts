import { Actions } from "../../Store/Actions/Session.actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { CardData } from "../../Interfaces/CardData";
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from "../../Interfaces/DefaultConnections";
import { Session } from "../../Interfaces/SessionData";

const CardReviewPage = (props: DefaultProperties) => {
  let { sessionid } = useParams();
  const session: Session | undefined = props.state.sessions.find(
    (session) => session.id === sessionid
  )!;
  const dispatch = props.dispatch;
  let navigate = useNavigate();
  let [cardRating, setCardRating] = useState(0);
  let [activeCard, setActiveCard] = useState(session.cards[0]);

  useEffect(() => {
    let newActiveCard = getNextCard();
    if (!newActiveCard) {
      navigate(`/about/${sessionid}`);
    } else {
      setActiveCard(newActiveCard);
      setCardRating(0);
    }
  }, [props.state.sessions]);
  const getNextCard = () => {
    let newActiveCard = session.cards.find((card: CardData) => {
      return card.rating === undefined;
    });
    return newActiveCard;
  };

  const setRating = () => {
    dispatch(
      Actions.SetCardRating(session.id, {
        id: activeCard.id,
        image: activeCard.image,
        cardName: activeCard.cardName,
        rating: cardRating,
      } as CardData)
    );
  };

  let options = <></>;
  for (let i = 0; i <= 10; i++) {
    options = (
      <>
        {options}
        <option value={i}>{i}</option>
      </>
    );
  }
  return (
    <>
      <h1>Session: {session.name}</h1>
      <img style={{ width: "100px", height: "100px" }} src={session.icon} />
      <h1>number of cards: {session.cards.length}</h1>
      <select
        value={cardRating}
        id="ratingSelect"
        onChange={(event) => setCardRating(parseInt(event.target.value))}
      >
        {options}
      </select>
      <button onClick={setRating} type="submit">
        Submit
      </button>
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
)(CardReviewPage);
