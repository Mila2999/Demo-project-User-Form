import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/UsersList/UsersList';

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
