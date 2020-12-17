import React, { useState } from 'react'
import UserModel from '../models/user'
import styles from './Home/Home.module.scss'
// import styles from './assets/Register.scss'

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isInstructor, setIsInstructor] = useState()

  const handleFirstName = e => {
    setFirstName(e.target.value)
  }  
  const handleLastName = e => {
    setLastName(e.target.value)
  } 
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleIsInstructor = e => {
    let isChecked = e.target.checked;
      if (isChecked){
        setIsInstructor(true)
      } else {
        setIsInstructor(false)
      }
    }
  

  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ firstName, lastName, email, password, isInstructor})
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/login')
        })
    }
  }

  return (
    <div >
      <h2>Register: </h2>
      <form className={`${styles.registerForm}`} onSubmit={ handleSubmit } >
        <div className="form-group">
          <label className={styles.formLabels} htmlFor="name">First Name: </label>
          <input 
            className={`${styles.LoginRegInputs}`}
            onChange={ handleFirstName } 
            value={ firstName }
            type="text" 
            id="firstName" 
            name="firstName" 
            required
          />
        </div>
        <div className="form-group">
        <label className={styles.formLabels} htmlFor="name">Last Name: </label>
          <input 
            className={`${styles.LoginRegInputs}`}
            onChange={ handleLastName } 
            value={ lastName }
            type="text" 
            id="lastName" 
            name="lastName" 
            required
          />
        </div>
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
          <label className={styles.formLabels} htmlFor="name">Password: </label>
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
        <div className="form-group">
          <label className={styles.formLabels} htmlFor="confirm-password">Confirm Password: </label>
          <input 
            className={`${styles.LoginRegInputs}`}
            onChange={ handleConfirmPassword } 
            value={ confirmPassword } 
            type="password" 
            id="confirm-password" 
            name="confirm-password" 
            required
          />
        </div>
        <div className="form-group"> 
          <label className={styles.formLabels} >I am an Instructor</label>
          <input
            className={`${styles.LoginRegInputs}`}
            type="checkbox"
            value={ isInstructor }
            onChange={ handleIsInstructor }
          />
        </div>
        <button
          className={`${styles.loginRegButtons}`}
          type="submit">Register </button>
      </form>
    </div>
  )
}

export default Register;