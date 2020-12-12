import React from 'react';
import { Link } from 'react-router-dom'
import UserModel from '../models/user'
import './Header.scss'

const Header = (props) => {
  console.log("Props in Header:", props)

  const loggedIn = (
    <>
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>My Profile</Link>
        <Link to={'/createworkout'}>Create Workout</Link>
        <h1>KBARRE FITNESS</h1>
        <a href="/logout" onClick={props.logout}>
          Log Out
        </a>
    </div>
    </>
  );

  const loggedOut = (
    <>
      <h1>KBARRE FITNESS</h1>
    </>
  );
  return <header>{props.currentUser ? loggedIn : loggedOut}</header>;
};


export default Header;
