import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardData } from '../../interfaces/CardData';
import {
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../interfaces/DefaultConnections';
import { Session } from '../../interfaces/SessionData';
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
        {props.sessions &&
          props.sessions.map((session: Session) => (
            <div id="test" key={session.id}>
              <Link to={`/about/${session.id}`}>
                <h2>{session.name}</h2>
              </Link>
              <img style={{ width: '50px', height: '50px' }} src={session.icon} />
              <ul>
                <li>{session.cardSet.name}</li>
                <li>
                  {getRatedCards(session.cards)}/{session.cards.length} rated
                </li>
              </ul>
              <button onClick={() => props.onDelete(session.id)}>Delete</button>
            </div>
          ))}
      </SessionListViewPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(SessionListView);
