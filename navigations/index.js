
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "./auth-navigator";
import Commons from "./common-navigators";
import User from "./user-navigators";
import { useState } from 'react';
import { useEffect } from 'react';
import LogIn from '../services/auth.service';
import AuthService from '../services/AuthService'

const isLoggedIn = true;

const Stack = createStackNavigator()

const configs = {
    screenOptions: {
        ...Commons.configs.screenOptions,
        ...(isLoggedIn ? User.configs.screenOptions : Auth.configs.screenOptions)
    }
    
}

AuthService.authenticate()


console.log(configs)

const AppNavigator = () => {
    const [{user, isLoggedIn}, setUser] = useState({user: null, isLoggedIn: false})

    useEffect(function(){
        setTimeout(handleLogin, 2500)
    }, [])

    const handleLogin = () => LogIn().then(user => setUser({user, isLoggedIn:true})).catch(e => console.error(e))

    return (
        <Stack.Navigator initialRouteName="Home"
            {...configs}
        >
            {Object.entries({
                ...Commons.screens,
                ...(!isLoggedIn ? User.screens : Auth.screens)
            }).map(([name, component], index)=>(
                <Stack.Screen 
                    key={index}
                    name={name} 
                    component={component} 
                    
                />
            ))}
        </Stack.Navigator>    
       )
}

export default AppNavigator