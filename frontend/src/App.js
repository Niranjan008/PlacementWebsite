import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react'
import HomePage from './HomePage.js'
import AdminLogin from './AdminLogin.js'
import AdminVerify from './AdminVerify.js'
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
          <Route exact path = "/adminverify">
            <AdminVerify/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
