import React from 'react';
import { Link } from 'react-router-dom'
import dumbbells from "../assets/dumbbell.png"
import './Header.scss'

const Header = (props) => {
  console.log("Props in Header:", props)

  const loggedIn = (
    <>
    <nav className="loggedInNav">
        <ul>
          <li> <Link to={"/"}>Home</Link> </li>
          <li> <Link to={"/profile"}>My Profile</Link> </li>
          <li> <a href="/logout" onClick={props.logout}>
            Log Out
          </a> </li>
        </ul>
    </nav>
          <img src={dumbbells}/>
    </>
  );

  const loggedOut = (
    <>
      <img src={dumbbells}/>
    </>
  );
  return <header>{props.currentUser ? loggedIn : loggedOut}</header>;
};


export default Header;
