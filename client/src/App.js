import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
