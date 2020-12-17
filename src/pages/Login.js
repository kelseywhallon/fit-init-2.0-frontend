import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import styles from './Home/Home.module.scss'

const Login = props => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/' />

  return (
    <div className={styles.loginForm} >
      <h2>Login: </h2>
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label className={styles.formLabels} htmlFor="name">Email: </label>
          <input
            className={`${styles.LoginRegInputs}`} 
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required  
          />
        </div>

        <div className="form-group">
          <label className={styles.formLabels} htmlFor="password">Password: </label>
          <input 
            className={`${styles.LoginRegInputs}`}
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        
        </div>
        <button 
          className={`${styles.loginRegButtons}`}
          type="submit"> Login </button>
      </form>
    </div>
  )
}

export default Login;