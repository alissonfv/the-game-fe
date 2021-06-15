import React from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './index.css';
import LayoutTheGame from './components/layout';
import LoginUser from './components/login';
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
          <Route path='/'>
            <LoginUser></LoginUser>
          </Route>
        </Switch>
      </Router>
    </LayoutTheGame>
  );
}

export default App;
