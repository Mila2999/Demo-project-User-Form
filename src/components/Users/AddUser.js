import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState('');
  const [enteredAge, setenteredAge] = useState('');
  const addUserHendler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
    setenteredUserName(''); //reset
    setenteredAge('');
  };

  const userNameChangesHandler = (event) => {
    setenteredUserName(event.target.value);
  };
  const userAgeChangesHandler = (event) => {
    setenteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Someting went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHendler}>
          <label htmlFor="username">UserName</label>
          <input
            onChange={userNameChangesHandler}
            value={enteredUserName}
            id="username"
            type="text"
          />

          <label htmlFor="age">Age (Years)</label>
          <input onChange={userAgeChangesHandler} id="age" type="number" value={enteredAge} />

          <Button className={classes.button} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
