import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react'
import HomePage from './Home_page/HomePage.js'
import AdminLogin from './Admin_files/AdminLogin.js'
import AdminVerify from './Admin_files/AdminVerify'
import Experience_post from './Post_Exp/Experience_post';
import ViewExp from './View_exp/ViewExp'
import Tips from './Tips/Tips'

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
