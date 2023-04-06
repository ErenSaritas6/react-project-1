import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [enteredColor, setEnteredColor] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredColor.trim().length === 0) {
          setError({
            title: "Invalid input",
            message: "Please enter a valid name, age or color(non-empty values)"
          });
          return;
        }
        if(+enteredAge < 1) {
          setError({
            title: "Invalid age",
            message: "Please enter a valid age that bigger than zero"
          });
          return;
        }

        props.onAddUser(enteredUsername, enteredAge, enteredColor);
        setEnteredUsername("");
        setEnteredAge("");
        setEnteredColor("");
    };

    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    };

    const colorChangeHandler = (event) => {
      setEnteredColor(event.target.value);
    };

    const errorHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        
        {error && <ErrorModal 
        title={error.title} 
        message={error.message}
        onConfirm={errorHandler}
        ></ErrorModal>}

        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input 
              id="username" 
              type="text" 
              value={enteredUsername} 
              onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age</label>
            <input 
              id="age" 
              type="number" 
              value={enteredAge} 
              onChange={ageChangeHandler}
            />
            <label htmlFor="color">Favorite Color</label>
            <input 
              id="color" 
              type="text" 
              value={enteredColor} 
              onChange={colorChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>

      </React.Fragment>
    );
};

export default AddUser;