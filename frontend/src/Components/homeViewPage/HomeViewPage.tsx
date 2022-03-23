import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Props as DefaultProperties,
  defaultMapStateToProps,
  defaultMapDispatchToProps,
} from '../../Interfaces/DefaultConnections';
import SessionListView from '../sessionListView/SessionListView';
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
        <div className="session-list-container">
          <Link id="start-session-btn" to="/sessionView">
            Start Session
          </Link>
          <SessionListView sessions={localStateArray} onDelete={deleteSession} />
          {!localStateArray && <p>No Sessions Created</p>}
        </div>
      </HomeViewPageStyle>
    </>
  );
};

export default connect(defaultMapStateToProps, defaultMapDispatchToProps)(HomeViewPage);
