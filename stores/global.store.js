import React, { useContext, useEffect, useState } from 'react'
import LocalStorage from './local.store'


const CURRENT_USER_KEY = 'current-user'

const userData = LocalStorage.getItem(CURRENT_USER_KEY);
const loc = LocalStorage
const INITAL_STATE = {
    user: JSON.parse(LocalStorage.getItem(CURRENT_USER_KEY)) || {}
}

const GlobalContext = React.createContext()

const GlobalProvider = ({children}) => {
    const [state, setState] = useState(INITAL_STATE)

    useEffect(()=> setState(INITAL_STATE), [])

    const handleUserChange = (newUser) => {
        setState({...INITAL_STATE, user: newUser})
        if (newUser && newUser.id) {
            LocalStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser))
        } else {
            LocalStorage.removeItem(CURRENT_USER_KEY)
        }
    }

    const isAuthenticated = () => user && user.id

    const getStateKey = (key) => state.hasOwnProperty(key) ? state.key : false

    return (
        <GlobalContext.Provider
            value={{
                getStateKey,
                isAuthenticated,
                onUserChange: handleUserChange,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
    useContext
}

export default GlobalContext

export { GlobalProvider }