import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers]= useState([]);

  useEffect( () => {
  //load data
    fetch ('http://localhost:5000/users')
    .then(res => res.json())

   .then (data=> setUsers(data))

  },[])

  const addHandelUser = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const user ={name, email}

      //post data to server
      fetch('http://localhost:5000/user',{

        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then (res => res.json())
      .then(data => {
        const newUser= [...users,data]
        setUsers(newUser)
        console.log(data)
      })
 } 


  return (
    <div className="App">
      <h1>My Own Api Data {users.length}</h1>
      <form onSubmit={addHandelUser}>
        <input type="text" name='name' placeholder='name' required ></input>
        <input type="email" name='email' placeholder='email' required></input>
        <input type="submit" value='Add User' ></input>
      </form>

          <ul>
            {
              users.map(user=> <li key={user.id}> Id:{user.id}  Name: {user.name} Email: {user.email}</li>)
            }
          </ul>
    </div>
  );
}

export default App;
