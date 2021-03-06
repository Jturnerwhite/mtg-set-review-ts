import { connect } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../interfaces/DefaultConnections';
import { CardData } from '../../interfaces/CardData';
import { Session } from '../../interfaces/SessionData';
import { SessionDetailsStyle } from './SessionDetailsPage.style';
import { MaterialCard } from '../_common/style/MaterialCard';

const SessionDetailsPage = (props: DefaultProperties) => {
  let ratedCards = 0;
  let checkForRating = false;
  let navigate = useNavigate();
  let { sessionid } = useParams();
  let sessionState: Session | undefined;
  let cardArray: Array<CardData> = [];

  if (sessionid) {
    sessionState = props.state.sessions.find((session) => session.id === sessionid);
    if (sessionState?.cards) {
      cardArray = sessionState.cards;
    }
  } else {
    navigate('/home');
  }

  const checkRating = (cardArray: Array<CardData>) => {
    cardArray.find((card) => {
      if (card.rating === undefined) {
        checkForRating = true;
      }
    });
  };
  checkRating(cardArray);

  cardArray.forEach((card) => {
    if (card.rating !== undefined) {
      ratedCards++;
    }
  });

  return (
    <>
      <SessionDetailsStyle>
        <MaterialCard>
          {sessionState && (
            <>
              <h1>About: {sessionState.name}</h1>
              <img style={{ width: '100px', height: '100px' }} src={sessionState.icon} />
              <h2>Set: {sessionState.cardSet.name}</h2>
              <h2>
                Cards: {ratedCards}/{sessionState.cards.length} rated
              </h2>
              <p>Created: {sessionState.created}</p>
              <p>
                Updated: {sessionState.lastUpdate === undefined ? 'n/a' : sessionState.lastUpdate}
              </p>
              <div className="rating-container">
                <div className="card-info">
                  {cardArray &&
                    cardArray.map((card) => (
                      <div id="test" key={card.id}>
                        <h2>{card.cardName}</h2>
                        <p>{card.rating === undefined ? 'no rating' : card.rating}</p>
                      </div>
                    ))}
                </div>
                <div>
                  {checkForRating && (
                    <Link to={`/session/${sessionState.id}`}>
                      <h2>Continue Rating</h2>
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}
          {!sessionState && (
            <div className="rating-container">
              <p>session not found</p>
            </div>
          )}
        </MaterialCard>
      </SessionDetailsStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(SessionDetailsPage);
