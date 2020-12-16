import React from 'react';
import { Link } from 'react-router-dom'
import lunges from "../../assets/lunges.png"
import calendar from "../../assets/calendar.png"
import styles from "./Home.module.scss"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Home = (props) => {


  return (
    <>
      {props.currentUser ? (
    <div className={ styles.workoutCardContainer }>
        {/* <h1>Welcome to KBarre Fitness!</h1> */}
        <Card style={{ width: '18rem' }} className={ styles.workoutCard}>
          <Card.Img variant="top" src={lunges} className={ styles.workoutButtonImg }/>
            <Button variant="light" type="submit" className={styles.homeButtons}>
              <Link to={'/workouts'} path="/workouts"> My Workouts </Link>
            </Button>
        </Card>
        <Card style={{ width: '18rem' }} className={ styles.workoutCard }>
          <Card.Img variant="top" src={calendar} className={ styles.workoutButtonImg}/>
            <Button variant="light" type="submit" className={styles.homeButtons}>
              <Link to={'/createworkout'} path="/creatworkout"> Create A New Workout </Link>
            </Button>
        </Card>

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
