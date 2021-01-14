import React from 'react'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MuTouchableWithoutFeeback = ({onPress, children}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        {children}
    </TouchableWithoutFeedback>
)

export default MuTouchableWithoutFeeback