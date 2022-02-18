import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CardViewPage from './Components/cardView/CardViewPage';
import SessionViewPage from './Components/sessionView/SessionViewPage';
// import StartSessionPage from './Components/session/StartSessionPage';
import FinishViewPage from './Components/finishView/FinishViewPage';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/sessionView'>Start Session</Link></button>
        </nav>
        <Routes>
          <Route path='/cardView' element={<CardViewPage/>}/>
          <Route path='/sessionView' element={<SessionViewPage/>}/>
          <Route path='/finish' element={<FinishViewPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
