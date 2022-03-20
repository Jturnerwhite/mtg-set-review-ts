import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../Interfaces/DefaultConnections';
import SessionListView from '../SessionListView/SessionListView';
import LocalStorageService from '../../Services/LocalStorageService';
import { Actions } from '../../Store/Actions/Session.actions';
import { HomeViewPageStyle } from './HomeViewPage.style';

const HomeViewPage = (props: DefaultProperties) => {
  let [localStateArray, setlocalStateArray] = useState(LocalStorageService.GetSessions());

  const deleteSession = (sessionId: string) => {
    setlocalStateArray(LocalStorageService.DeleteSession(sessionId));
    if (sessionId) {
      props.dispatch(Actions.DeleteSession(sessionId));
    }
  };

  return (
    <>
      <HomeViewPageStyle>
        <div className="rating-container">
          <h1>Session List:</h1>
          <div className="card-info">
            <SessionListView sessions={localStateArray} onDelete={deleteSession} />
          </div>
          {!localStateArray && <p>No Sessions Created</p>}
          <button>
            <Link to="/sessionView">Start Session</Link>
          </button>
        </div>
      </HomeViewPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(HomeViewPage);