import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Register Please </h1>

            <form >
                    <input type="text" placeholder='Your Name' />
                    <br/>
                    <input type="email" placeholder='Your email'/>
                    <br/>
                    <input type="password" placeholder='your password'/>
                    <br />
                    <br />
                    <input type="submit" value="Register" />
                  

            </form>
        </div>
    );
};

export default Register;