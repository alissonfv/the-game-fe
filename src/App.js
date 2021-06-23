import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './index.css';
import LayoutTheGame from './components/layout';
import LoginUser from './components/login';
import CreateUser from './components/informationsLogin';
import Questions from './components/question';
import Task from './components/task';
import { isAuth } from './utils/auth';

function App() {
  return (
    <LayoutTheGame>
      <Router>
        <Switch>
          <Route path='/123' render = {()=>
            isAuth() ? (<Task/>) : (<Redirect to ='/'/>)
          }/>
          <Route exact path='/'>
            <LoginUser></LoginUser>
          </Route>
          <Route exact path='/createAccount'>
            <CreateUser></CreateUser>
          </Route>
          <Route exact path='/question'>
            <Questions></Questions>
          </Route>
        </Switch>
      </Router>
    </LayoutTheGame>
  );
}

export default App;
