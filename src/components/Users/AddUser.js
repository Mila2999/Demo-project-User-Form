import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setenteredUserName] = useState('');
  const [enteredAge, setenteredAge] = useState('');

  const [error, setError] = useState();

  const addUserHendler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0)',
      });
      return;
    }

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
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
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
    </Wrapper>
  );
};
export default AddUser;
