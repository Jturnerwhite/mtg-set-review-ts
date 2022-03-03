import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SessionViewPage from './Components/sessionView/SessionViewPage';
import AboutViewPage from './Components/aboutView/AboutViewPage';
import HomeViewPage from './Components/homeView/HomeViewPage';
import ReviewViewPage from './Components/reviewView/ReviewViewPage';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button><Link to='/'>Home</Link></button>
        </nav>
        <Routes>
          <Route path='/' element={<HomeViewPage/>}/>
          <Route path='/sessionView' element={<SessionViewPage/>}/>
          <Route path='/about/:sessionid' element={<AboutViewPage/>}/>
          <Route path='/session/:sessionid' element={<ReviewViewPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
