import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Actions } from "../../Store/Actions/Session.actions";
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from "../../Interfaces/DefaultConnections";
import { CardData } from "../../Interfaces/CardData";

const AboutViewPage = (props: DefaultProperties) => {
  const [isInit, setInit] = useState(false);
  const cardArray = props.state.session.cards;
  let ratedCards = 0;
  let checkForRating = false;
  let navigate = useNavigate();
  let {sessionid} = useParams();

  useEffect(() => {
    if(sessionid){
      setInit(true);
      props.dispatch(
        Actions.SelectSession(sessionid)
        )
      } else {
        navigate('/home');
      }
    },[]);
    
    const checkRating = (cardArray: Array<CardData>) => {
      cardArray.find((card) => {
        if(card.rating === undefined){
          checkForRating = true;
        }
      })
    };
    checkRating(cardArray)

    cardArray.forEach(card => {
      if(card.rating !== undefined){
        ratedCards ++
      }
    });

  return (
    <>
      <h1>About: {props.state.session.name}</h1>
      <img style={{width: '100px', height: '100px'}}src={props.state.session.icon}/>
      <h2>Set: {props.state.session.cardSet.name}</h2>
      <h2>Cards: {ratedCards}/{props.state.session.cards.length} rated</h2>
      <div className='rating-container'>
          <div className='card-info'>
              {cardArray && cardArray.map(card => (
                <div id='test' key={card.id}>
                  <h2>{card.cardName}</h2>
                  <p>{(card.rating === undefined) ? 'no rating' : card.rating}</p>
                </div>
              ))}
          </div>
          <div>
            {checkForRating && 
              <Link to={`/session/${props.state.session.id}`}>
                <h2>Continue Rating</h2>
              </Link>}
          </div>
          <div>
            {isInit && !props.state.session.id && <p>session not found</p>}
          </div>
      </div>
    </>
  );
};

export default connect(
  defaultMapStateToProps,
  defaultMapDispatchToProps
)(AboutViewPage);
