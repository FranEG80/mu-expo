import React from 'react'
import { Image, Text, Touchable } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MuImage from '../atoms/MuImage';
import MuTouchableWithoutFeeback from '../atoms/MuTouchableWithoutFeedback';
export default function LogoTitle(props) {
    return (
        <MuTouchableWithoutFeeback
            onPress={()=>console.log('press!')}
        >
            <MuImage
                style={{ width: 50, height: 50 }}
                source={{uri:'https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png' }}
            />
        </MuTouchableWithoutFeeback>
      
    );
  }