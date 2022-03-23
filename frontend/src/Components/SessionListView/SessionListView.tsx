import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardData } from '../../Interfaces/CardData';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../Interfaces/DefaultConnections';
import { Session } from '../../Interfaces/SessionData';
import { SessionListViewPageStyle } from './SessionListViewPage.style';

const SessionListView = (props: { sessions: Array<Session>; onDelete: Function }) => {
  const getRatedCards = (sessionCards: Array<CardData> | undefined): number => {
    let ratedCard = 0;
    if (sessionCards) {
      sessionCards.forEach((card: CardData) => {
        if (card.rating !== undefined) {
          ratedCard++;
        }
      });
    }
    return ratedCard;
  };
  return (
    <>
      <SessionListViewPageStyle>
        <div className="test">
          {props.sessions &&
            props.sessions.map((session: Session) => (
              <div className="session-card" key={session.id}>
                <Link className="session-link" to={`/about/${session.id}`}>
                  <h1>{session.name}</h1>
                  <img src={session.icon} />
                </Link>
                <div className="session-details">
                  <p>
                    <strong>Set:</strong> {session.cardSet.name}
                    <br />
                    <strong>Cards Reviewed:</strong> {getRatedCards(session.cards)}/
                    {session.cards.length}
                    <br />
                    <strong>Created:</strong> {session.created}
                    <br />
                    <strong>Updated:</strong> {session.lastUpdate || 'n/a'}
                  </p>
                </div>
                <div className="session-buttons">
                  <button onClick={() => props.onDelete(session.id)}>Delete</button>
                  <Link
                    className="review-button"
                    style={{ textDecoration: 'none' }}
                    to={`/about/${session.id}`}
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </SessionListViewPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(SessionListView);
