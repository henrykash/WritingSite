 import React, {useContext, useState, useEffect} from 'react'
 import {auth} from '../config/firebase'
 
 const AuthContext = React.createContext();
 export const useAuth = () => {
     return context = useContext(AuthContext);
 }

 export function AuthProvider({children}) {
     const [currentUser, setCurrentUser] = useState();

     const signUp = (email, password) =>{
         return auth.createUserWithEmailAndPassword(email, password);
     }

     const value = {
         currentUser,
     }

     useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return unsubscribe; //this will unsubscribe the user whenever we un-mount the relative component
     }, [])
     
     return (
         <div>
             <AuthContext.Provider value={value}> {/* autheniticating our currentUser everywhere in the application */}
                    {children}
             </AuthContext.Provider>
         </div>
     )
 }
 