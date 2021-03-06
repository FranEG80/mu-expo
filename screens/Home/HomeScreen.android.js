import React from 'react'
import { Button, StyleSheet, Text, View, } from "react-native";
import  componentStyle  from './HomeScreen.style'
import getCommonStyle from '../../styles/common.style'

import {  useSafeAreaInsets  } from 'react-native-safe-area-context';

const HomeScreen = ({navigation, route: {params : props}})=> {
    const insets = useSafeAreaInsets();

    const styles = StyleSheet.create({...getCommonStyle(insets), ...componentStyle})

    return (
        <View
            style={{...styles.mainContainer, ...styles.container}}
        
        >
            <Text>Estamos en movil</Text>
            <Button
                title="prueba"
                onPress={()=> navigation.navigate(
                    'Profile', 
                    { name: 'Jane', }
                )}
            />
        </View>
    
)}


export default HomeScreen