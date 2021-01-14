import React from 'react'
import {GlobalStore, GlobalContext} from '../stores/global.store'

const API_URL = process.env.REACT_NATIVE_API_URL + '/authenticate'

const LogIn = (user) => {
    if (!user) user = {}
    return fetch(API_URL, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(user), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => response );
}

export default LogIn
// export default LogInWithContext = () => (
//     <GlobalContext.Provider
// )