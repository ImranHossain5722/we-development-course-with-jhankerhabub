import React from 'react';

const AddUser = () => {

    const  handelAddUser = event =>{

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email};

        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log('success', data);
        })
        
    }
    return (
        <div>
            <h1>Please add a new user</h1>
            <form onSubmit={handelAddUser} >
                <input type='text' name='name' placeholder='name' required />
                <input type='email' name='email' placeholder='email' required />
                <input type='submit' value='Add User'/>
            </form>
        </div>
    );
};

export default AddUser;