import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHendler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHendler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <Button className={classes.button} type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
