import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState('');
  const [enteredAge, setenteredAge] = useState(null);
  const addUserHendler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredAge);
  };

  const userNameChangesHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  const userAgeChangesHandler = (event) => {
    setenteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHendler}>
        <label htmlFor="username">UserName</label>
        <input onChange={userNameChangesHandler} id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input onChange={userAgeChangesHandler} id="age" type="number" />

        <Button className={classes.button} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
