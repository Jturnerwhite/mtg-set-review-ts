import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../interfaces/DefaultConnections';
import SessionListView from '../SessionListView/SessionListView';
import LocalStorageService from '../../services/LocalStorageService';
import { Actions } from '../../store/actions/session.actions';
import { HomeViewPageStyle } from './HomeViewPage.style';

const HomeViewPage = (props: DefaultProperties) => {
  let [localStateArray, setlocalStateArray] = useState(LocalStorageService.GetSessions());

  const deletesession = (sessionId: string) => {
    setlocalStateArray(LocalStorageService.Deletesession(sessionId));
    if (sessionId) {
      props.dispatch(Actions.Deletesession(sessionId));
    }
  };

  return (
    <>
      <HomeViewPageStyle>
        <div className="rating-container">
          <h1>session List:</h1>
          <div className="card-info">
            <SessionListView sessions={localStateArray} onDelete={deletesession} />
          </div>
          {!localStateArray && <p>No sessions Created</p>}
          <button>
            <Link to="/sessionView">Start session</Link>
          </button>
        </div>
      </HomeViewPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(HomeViewPage);
