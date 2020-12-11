import React from 'react';
import { Link } from 'react-router-dom'
import UserModel from '../models/user'
import './Header.scss'

const Header = (props) => {
  console.log("Props in Header:", props)


  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Home!</Link>
      </div>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/createworkout'}>Create New Workout</Link></li>
              <li><Link to={'/profile'}>Profile</Link></li>
              <li><a href="/logout" onClick={ props.logout }>Log Out</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>Register</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
            </>
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
