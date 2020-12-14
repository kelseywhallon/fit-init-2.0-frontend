import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserModel from "../../models/user";
// import styles from "./UserProfile.module.scss";


const Profile = props => {

  console.log("Profile props: ", props.currentUser)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isInstructor, setIsInstructor] = useState()
  const [user, setUser] = useState()

  
  const fetchUser = () => {
    UserModel.show(props.currentUser).then(data => {
      setFirstName(data.user.firstName);
      setLastName(data.user.lastName);
      setEmail(data.user.email);
      setIsInstructor(data.user.isInstructor);
    });
  };

  useEffect(() => {
    fetchUser();
  }, [])

  const handleFirstName = e => {
    setFirstName(e.target.value);
    console.log("inside handelfirstname: " + e);
  };

  const handleLastName = e => {
    setLastName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handleIsInstructor = e => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setIsInstructor(true)
    } else {
      setIsInstructor(false)
    }
  }

  const handleUpdate = e => {
    e.preventDefault();
    UserModel.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      isInstructor: isInstructor,
      id: props.currentUser
    }).then(data => {
      console.log("Successful update:", data);
      //redirect to home page
      props.history.push("/");
    });
  };

  const handleDelete = e => {
    e.preventDefault();
    UserModel.destroy({
      firstName: firstName,
      lastName: lastName,
      email: email,
      isInstructor: isInstructor,
      id: props.currentUser
    }).then(deletedUser => {
      console.log(`${firstName} was deleted `);
      console.log(props.currentUser);
      if (!props.currentUser) return <Redirect to="/register" />;
    });
  };
  
  const logout = () => {
    localStorage.removeItem("id");
    UserModel.logout().then(res => {
        setUser(null)
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First Name: </label>
          <input
            onChange={handleFirstName}
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name: </label>
          <input
            onChange={handleLastName}
            value={ lastName }
            type="text"
            id="lastName"
            name="lastName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email: </label>
          <input
            onChange={ handleEmail }
            value={ email } 
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        
        <div className="form-group">
          <label>I am an Instructor: </label>
          <input
            type="checkbox"
            value={isInstructor}
            onChange={handleIsInstructor}
          />
        </div>
        <button type="submit" onClick={ handleUpdate }>Update</button>
        <button type="submit" onClick={( handleDelete, logout )}>Delete</button>
      </form>
    </div>
  )
}

export default Profile