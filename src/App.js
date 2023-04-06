import React, { useState } from 'react';

import Adduser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge, uColor) => {
  setUsersList((prevUsersList) => {
    return [
      ...prevUsersList, 
      {name: uName, age: uAge, color: uColor, id: Math.random().toString()},
    ]
  });
};

  return (
    <div>
        <Adduser onAddUser={addUserHandler}/>
        <UserList users={usersList}/>
    </div>
  );
}

export default App;
