import React from 'react'
import { Button, Text, View, StyleSheet} from "react-native";
import {  useSafeAreaInsets  } from 'react-native-safe-area-context';
import  componentStyle  from './HomeScreen.style'
import getCommonStyle from '../../styles/common.style' 

const HomeScreen = ({navigation, route: {params : props}})=> {
    const insets = useSafeAreaInsets()
    const styles = StyleSheet.create({...getCommonStyle(insets), ...componentStyle})

    return (
        <View
            style={[styles.mainContainer, styles.container]}
        
        >
            <Text>Estamos en web</Text>
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