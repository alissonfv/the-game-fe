import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './index.css';
import LayoutTheGame from './components/layout';
import LoginUser from './components/login';
import CreateUser from './components/informationsLogin';
import Questions from './components/question';
import Ranking from './components/ranking';
import { isAuth } from './utils/auth';

function App() {
  return (
    <LayoutTheGame>
      <Router>
        <Switch>
          <Route path='/ranking' render = {()=>
            isAuth() ? (<Ranking/>) : (<Redirect to ='/'/>)
          }/>
          <Route exact path='/'>
            <LoginUser></LoginUser>
          </Route>
          <Route exact path='/createAccount'>
            <CreateUser></CreateUser>
          </Route>
          <Route path='/question' render = {()=>
            isAuth() ? (<Questions/>) : (<Redirect to ='/'/>)
          }/>
        </Switch>
      </Router>
    </LayoutTheGame>
  );
}

export default App;
