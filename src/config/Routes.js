import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Profile from '../pages/Profile/Profile'
import CreateWorkout from '../pages/CreateWorkout'


const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = localStorage.getItem("id");
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const Routes = (props) => (

  <Switch>
        <Route
      exact
      path="/"
      render={routeComponentProps => {
        return (
          <Home {...routeComponentProps} currentUser={props.currentUser} />
        );
      }}
    />
    <Route path="/register" component={Register} />
    <Route
      path="/login"
      render={routeComponentProps => {
        return (
          <Login
            {...routeComponentProps}
            // more props to come here
            currentUser={props.currentUser}
            storeUser={props.storeUser}
          />
        );
      }}
    />
    <PrivateRoute 
      path='/profile' 
      component={ Profile } 
      currentUser={ props.currentUser } 
    />
    <PrivateRoute 
      path='/createworkout' 
      component={ CreateWorkout } 
      currentUser={ props.currentUser } 
    />
  </Switch>
)

export default Routes;