import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateSessionPage from './Components/CreateSessionPage/CreateSessionPage';
import SessionDetailsPage from './Components/SessionDetailsPage/SessionDetailsPage';
import HomeViewPage from './Components/HomeViewPage/HomeViewPage';
import CardReviewPage from './Components/CardReviewPage/CardReviewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button>
            <Link to="/">Home</Link>
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<HomeViewPage />} />
          <Route path="/sessionView" element={<CreateSessionPage />} />
          <Route path="/about/:sessionid" element={<SessionDetailsPage />} />
          <Route path="/session/:sessionid" element={<CardReviewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
