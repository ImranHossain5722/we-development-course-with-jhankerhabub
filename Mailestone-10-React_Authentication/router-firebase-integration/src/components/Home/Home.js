import React from 'react';
import useFirebase from '../../hooks/useFirebase'
const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Home page</h1>
            <p>Current user is : {user? user.displayName:'No body Now'}</p>
        </div>
    );
};

export default Home;