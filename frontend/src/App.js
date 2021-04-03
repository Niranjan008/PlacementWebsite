import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react'
import HomePage from './HomePage.js'
import AdminLogin from './AdminLogin.js'
import AdminVerify from './AdminVerify.js'
import Experience_post from './Experience_post';
import ViewExp from './ViewExp'
import Tips from './Tips'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <HomePage/>
          </Route>
          <Route exact path = "/adminlogin">
            <AdminLogin/>
          </Route>
          <Route exact path = "/exp_view">
            <ViewExp/>
          </Route>
          <Route exact path = "/adminverify">
            <AdminVerify/>
          </Route>
          <Route exact path = "/exp_post">
          <Experience_post/>
          </Route>
          <Route exact path = "/tips">
          <Tips/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
