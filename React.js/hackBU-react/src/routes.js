import React from 'react';
import App from './App.js';
import PostView from './components/PostView.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import SignOut from './components/SignOut.js';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/View/:postID" component={PostView} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignOut" component={SignOut} />
      </Switch>
    </div>
  );
};
