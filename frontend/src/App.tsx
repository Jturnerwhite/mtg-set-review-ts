import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from './Components/test/MainPage';
import PreviewPage from './Components/test/PreviewPage';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button><Link to='/'>Main</Link></button>
          <button><Link to='/page2'>Preview</Link></button>
        </nav>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/page2' element={<PreviewPage/>}/>
        </Routes>
        <p>Do Things!</p>
      </div>
    </Router>
  );
}

export default App;
