import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

const {singInWithGoogle}= useFirebase ();

    return (
        <div>
            <h1>Login Please </h1>

            <button onClick={singInWithGoogle} >Google Sing In </button>
                <form >
                        
                        <br />
                        <br />
                        <input type="email" placeholder='Your email'/>
                        <br/>
                        <input type="password" placeholder='your password'/>
                        <br />
                        <br />
                        <input type="submit" value="Login" />
                </form>
        </div>
    );
};

export default Login;