import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './index.css';
import LayoutTheGame from './components/layout';
import LoginUser from './components/login';
import Questions from './components/question';
import Ranking from './components/ranking';
import Points from './components/points';
import { isAuth } from './utils/auth';

export default function App() {
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
          <Route path='/question' render = {()=>
            isAuth() ? (<Questions/>) : (<Redirect to ='/'/>)
          }/>
          <Route path='/points' render = {()=>
            isAuth() ? (<Points/>) : (<Redirect to ='/'/>)
          }/>
        </Switch>
      </Router>
    </LayoutTheGame>
  );
}