import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateWorkout from './pages/CreateWorkout'
import Routes from './config/Routes'
import './App.css'
import UserModel from './models/user'

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  const [firstName, setFirstName] = useState('');
  const [isInstructor, setIsInstructor] = useState()

  const storeUser = (userId) => {
    localStorage.setItem('id', userId)
    setCurrentUser(userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('id')

    UserModel.logout()
      .then(res => {
        setCurrentUser(null)
      })
  }

  const fetchUser = () => {
    UserModel.show(currentUser).then(data => {
      setFirstName(data.user.firstName);
      setIsInstructor(data.user.isInstructor);
    });
  };

  useEffect(fetchUser, [])


  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        firstName={ firstName }
        isInstructor={ isInstructor }
        logout={logout}
      />
      <Routes
        currentUser={currentUser}
        firstName={ firstName }
        isInstructor={ isInstructor }
        storeUser={storeUser}
      />
      {/* <CreateWorkout 
        currentUser={ currentUser}
        firstName={ firstName }
        isInstructor={ isInstructor }
      /> */}
      <Footer />
    </div>
  );
}

export default App 
