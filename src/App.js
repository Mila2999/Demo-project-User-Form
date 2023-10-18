import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      console.log(prevUsersList);
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
