//This will wrap all the relevant Auth context
import React, {useState, useEffect, useContext, createContext} from 'react';
import nookies from 'nookies';
import firebaseClient from './firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    firebaseClient();
    const [user, setUser] = useState(null);

    useEffect(() => {
        
    })
}