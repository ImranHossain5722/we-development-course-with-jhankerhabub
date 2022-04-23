import {useEffect,useState } from 'react';
import {getAuth,GoogleAuthProvider, signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth'
import app from '../firebase.init'

const useFirebase =()=>{
    
    const auth = getAuth (app)
    const googleProvider = new GoogleAuthProvider()

    const [user,setUser]= useState({})

    // fun
    const singInWithGoogle = ()=>{

        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user
            setUser (user)
            console.log(user);
        })
    
    }
    const handelSignOut =() =>{
           
        signOut(auth)
        .then(()=>{

        })

    }

   useEffect(()=>{
        onAuthStateChanged (auth, user=>{

            setUser(user)
        });

   },[])
    
    return{ user, handelSignOut,singInWithGoogle }

}
export default useFirebase