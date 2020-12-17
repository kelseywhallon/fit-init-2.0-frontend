import React from 'react';
import { Link } from 'react-router-dom'
import lunges from "../../assets/lunges.png"
import calendar from "../../assets/calendar.png"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import styles from "./Home.module.scss"

const Home = (props) => {


  return (
    <>
      {props.currentUser ? (
    <div className={ styles.workoutCardContainer }>
        {/* <h1>Welcome to KBarre Fitness!</h1> */}
        <Card style={{ width: '18rem' }} className={ styles.workoutCard}>
          <Card.Img variant="top" src={lunges} className={ styles.workoutButtonImg }/>
            <Button  variant="custom" type="submit" className={`${styles.homeButtons}`}>
              <Link to={'/workouts'} path="/workouts"> My Workouts </Link>
            </Button>
        </Card>
        <Card style={{ width: '18rem' }} className={ styles.workoutCard }>
          <Card.Img variant="top" src={calendar} className={ styles.workoutButtonImg}/>
            <Button variant="light" type="submit" className={`${styles.homeButtons}`}>
              <Link to={'/createworkout'} path="/creatworkout"> Create A New Workout </Link>
            </Button>
        </Card>

    </div>
      ) : (
        <div>

          <Button 
            variant="custom"
            className={`${styles.loginRegButton}`} 
            type="submit" > 
              <Link to={'/login'} path='/login'> 
                Login
              </Link> 
          </Button> 
            <Button 
              variant="custom"
              className={`${styles.loginRegButton}`}
              type="submit" > 
                <Link to={'/register'} path='/register'> 
                  Register  
                </Link> 
            </Button> 
        </div>
      )}
    </>
  );
}

export default Home;
