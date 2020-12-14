import React from 'react';
import { Link } from 'react-router-dom'
import UserModel from '../models/user'
import './Header.scss'

const Header = (props) => {
  console.log("Props in Header:", props)

  const loggedIn = (
    <>
    <nav className="loggedInNav">
        <ul>

          <li> <Link to={"/"}>Home</Link> </li>
          <li> <Link to={"/profile"}>My Profile</Link> </li>
          <li> <Link to={'/createworkout'}>Create Workout</Link> </li>
          <li> <a href="/logout" onClick={props.logout}>
            Log Out
          </a> </li>
        </ul>
    </nav>
        <h1>KBARRE FITNESS</h1>
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
