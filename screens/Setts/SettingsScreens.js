import React from 'react'
import { ImageBackground, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const backgroundMap = require('../../assets/images/GoogleMapTA.jpg')

function SettingsScreens() {
    const insets = useSafeAreaInsets()
    return (
      <ImageBackground
        source={backgroundMap}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }}
      >
        <View style={{ 
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
    
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text>Settings!</Text>
        </View>
      </ImageBackground>
      
    );
  }

export default SettingsScreens