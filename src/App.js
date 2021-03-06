import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './config/Routes'
import './pages/assets/App.scss'
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
        logout={ logout }
      />
      <Routes
        currentUser={currentUser}
        firstName={ firstName }
        isInstructor={ isInstructor }
        storeUser={storeUser}
      />
      <Footer />
    </div>
  );
}

export default App 
