import React from 'react';
import { Link } from 'react-router-dom'

const Home = (props) => {


  return (
    <>
      {props.currentUser ? (
    <div>
        {/* <h1>Welcome to KBarre Fitness!</h1> */}
        <button type="submit"> 
          <Link to={'/workouts'} path="/workouts"> My Workouts </Link>
        </button>
        <button type="submit"> 
          <Link to={'/createworkout'} path="/createworkout"> Create a New Workout </Link>
        </button>
    </div>
      ) : (
        <div>

          <button type="submit" > 
              <Link to={'/login'} path='/login'> 
                Login
              </Link> 
          </button> 
            <button type="submit" > 
              <Link to={'/register'} path='/register'> 
                Register  
              </Link> 
            </button> 
        </div>
      )}
    </>
  );
}

export default Home;
