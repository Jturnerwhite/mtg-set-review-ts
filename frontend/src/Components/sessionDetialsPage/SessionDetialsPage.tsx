import { connect } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../Interfaces/DefaultConnections';
import { CardData } from '../../Interfaces/CardData';
import { Session } from '../../Interfaces/SessionData';
import { SessionDetialsStyle } from './SessionDetialsPage.style';
import { toSvg } from 'jdenticon';
const svgString = toSvg('value', 100);
console.log(svgString);

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
      <SessionDetialsStyle>
        <div className="details-card">
          {sessionState && (
            <>
              <div className="details-card-hearder">
                <div className="detials-jdenticon">
                  <img style={{ width: '100px', height: '100px' }} src={sessionState.icon} />
                </div>
                <div className="details-card-info">
                  <div className="details-session-name">
                    <h1>{sessionState.name}</h1>
                    <p>{sessionState.id}</p>
                  </div>
                  <div className="details-set-name">
                    <img
                      id="detials-small-icon"
                      style={{ width: '50px', height: '50px' }}
                      src={sessionState.icon}
                    />
                    <h2>{sessionState.cardSet.name}</h2>
                  </div>
                </div>
              </div>
              <hr className="hr" />
              <div className="rating-container">
                <div className="card-info-container">
                  {cardArray &&
                    cardArray.map((card) => (
                      <div className="card-info" key={card.id}>
                        <p id="card-name">{card.cardName}</p>
                        <p id="card-rating">
                          {card.rating === undefined ? 'no rating' : card.rating}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                {checkForRating && (
                  <Link id="details-link" to={`/session/${sessionState.id}`}>
                    <h2>Continue Rating</h2>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
        {!sessionState && (
          <div className="rating-container">
            <p>session not found</p>
          </div>
        )}
      </SessionDetialsStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(SessionDetailsPage);
