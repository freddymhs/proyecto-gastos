import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Components/organisms/Header/Index';
import Home from './Layout/PageHome/Index';
import Auth from './Layout/PageAuth/Index';
import LogOut from './Layout/PageLogOut/Index';

function App(props) {
  console.log(props);
  return (
    <Router>
      <Header />

      <Switch>

        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/logout" component={LogOut} />

      </Switch>

    </Router>

  );
}

export default App;
