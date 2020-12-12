import React from 'react';
import { Link } from 'react-router-dom'
import dumbbells from "./assets/dumbbell.png"

const Home = (props) => {


  return (
    <>
      {props.currentUser ? (
    <div>
        <h1>Welcome Home!</h1>
    </div>
      ) : (
        <div>
          <img src={dumbbells}/>
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
