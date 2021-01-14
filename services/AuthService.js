import http from './BaseService';
import React, { useContext, useState } from 'react'
import GlobalContext from '../stores/global.store'
import LocalStorage from '../stores/local.store';

// export const HomePage = () => {
//   const user = useContext(UserContext)

//   return <div>{user.name}</div>
// }

const register = user => http.post('/register', user)

const authenticate = credentials => {
  const context = useContext(GlobalContext)  
  const [user, setUser] = useState(false)

  console.log(context)

  // const handleUserChange = useContext(GlobalContext)
  // http
  //   .post(`/authenticate`, credentials)
  //   .then(
  //     response => {
  //       //setUser()
  //       return {isAuthenticated: true}
  //     },
  //     error => {
  //       console.error(error)
  //       // addError()
  //       return {
  //         isAuthenticated: false, 
  //         errors: {
  //           wrongCredential: true,
  //           email: true,
  //           password: true
  //         }
  //       }
  //     }
  //   )

}

const logout = () => http.post(`/logout`)

export default {
  register,
  authenticate,
  logout
}