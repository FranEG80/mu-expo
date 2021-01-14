import React from 'react'
import { Button, Text } from 'react-native'

const ProfileScreen = ({navigation, route: {params : props}}) => {
    const name = props && props.name ? props.name : 'noName'
    return (
        <>
            <Text>This is {name}'s profile</Text>
            <Button
                title="Go to Details... again"
                //redirigimos a la misma pantalla pero con otros params
                onPress={() => navigation.push('Profile', {name: 'Paul'})}
            />
        </>
    
)}

export default ProfileScreen