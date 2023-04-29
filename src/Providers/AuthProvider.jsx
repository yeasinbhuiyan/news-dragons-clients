import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createAccount=(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password)

    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{unsubscribe()}
    },[])
    const logOut=()=>{
        signOut(auth)
    }

    const authInfo = {
        createAccount,
        logIn,
        user ,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;