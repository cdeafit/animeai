import React, { useContext, useEffect, useState } from 'react';
import { auth, fsdb, rtdb } from '../main/firebase.js'
import axios from 'axios'
import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';
const AuthContext = React.createContext()

//import database from 'firebase/database'
//import { ContactSupportOutlined } from '@material-ui/icons';

export function useAuth(){
    return useContext(AuthContext)
}

export function ContextProvider({ children }){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    function deleteData(){
        return deleteDoc(doc(fsdb, "users", "Prueba"))
    }

    function requestAnimeById(id){
        const url = "https://animeai.herokuapp.com/anime/"
        const conc = url.concat('',id)        
        console.log(conc)

        axios.get(conc)
            .then(result => {
                //console.log(result)
                setData(result)
            })
        return data
    }

    async function readData(){
        const snap = await getDoc(doc(fsdb, "users", currentUser.uid))
        if(snap.exists()) return snap.data()
        return null
    }   

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password)
    }    

    function login(email, password){
        auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateProfile(dataToChange){
        return currentUser.updateProfile(dataToChange)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)            
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        updateEmail,
        updatePassword,
        updateProfile,
        deleteData,
        readData,
        requestAnimeById
    }

    return(         
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}